import { requestDemoFormSchema } from "@/schema/requestDemoFormSchema";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.MAILCHIMP_API_KEY;
const API_SERVER = process.env.MAILCHIMP_API_SERVER;
const AUDIENCE_ID = process.env.MAILCHIMP_API_AUDIENCE_ID;

export async function POST(req: NextRequest) {
  try {
    const requestDemoFormData = await req.json();

    const errors = validateForm(requestDemoFormData);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: errors }, { status: 400 });
    }

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: requestDemoFormData.email,
      status: "subscribed",
      tags: ["request-a-demo"],
      merge_fields: {
        COMPANY: requestDemoFormData.company,
        FNAME: requestDemoFormData.firstName,
        LNAME: requestDemoFormData.lastName,
        CONTACTNO: requestDemoFormData.phone,
        JOBTITLE: requestDemoFormData.jobTitle,
        PROVINCE: requestDemoFormData.state,
        ZIPCODE: requestDemoFormData.zipCode,
        MESSAGE: requestDemoFormData.info,
      },
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
        { message: "Contact form submitted successfully" },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        { error: "Failed to submit form" },
        { status: 500 },
      );
    }
  } catch (error) {
    console.error("Error submitting form", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

const validateForm = (requestDemoFormData: {
  email: string;
  company: string;
  firstName: string;
  lastName: string;
  phone: string;
  jobTitle: string;
  state: string;
  zipCode: string;
  info: string;
}) => {
  try {
    requestDemoFormSchema.parse(requestDemoFormData);
    return {};
  } catch (err: any) {
    const fieldErrors: { [key: string]: string } = {};
    err.errors.forEach((error: any) => {
      fieldErrors[error.path[0]] = error.message;
    });
    return fieldErrors;
  }
};
