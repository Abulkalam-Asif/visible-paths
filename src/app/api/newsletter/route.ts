import { newsletterSchema } from "@/schema/newsletterSchema";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.MAILCHIMP_API_KEY;
const API_SERVER = process.env.MAILCHIMP_API_SERVER;
const AUDIENCE_ID = process.env.MAILCHIMP_API_AUDIENCE_ID;

export async function POST(req: NextRequest) {
  try {
    const newsletterData = await req.json();
    const errors = validateForm(newsletterData);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: errors }, { status: 400 });
    }

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: newsletterData.email,
      status: "subscribed",
      tags: ["newsletter"],
    };

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `api_key ${API_KEY}`,
      },
    };

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: options.headers,
    });

    if (response.ok) {
      return NextResponse.json(
        { message: "Newsletter subscription successful" },
        { status: 200 },
      );
    } else {
      const error = await response.json();
      if (error.title === "Member Exists") {
        return NextResponse.json(
          { error: { email: "Email already subscribed" } },
          { status: 400 },
        );
      } else {
        return NextResponse.json(
          { error: { email: "Failed to subscribe" } },
          { status: 500 },
        );
      }
    }
  } catch (error) {
    console.error("Error submitting form", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

const validateForm = (newsletterData: { email: string }) => {
  try {
    newsletterSchema.parse(newsletterData);
    return {};
  } catch (err: any) {
    const fieldErrors: { [key: string]: string } = {};
    err.errors.forEach((error: any) => {
      fieldErrors[error.path[0]] = error.message;
    });
    return fieldErrors;
  }
};
