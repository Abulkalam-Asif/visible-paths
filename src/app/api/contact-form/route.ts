import { contactFormSchema } from "@/schema/contactFormSchema";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.MAILCHIMP_API_KEY;
const API_SERVER = process.env.MAILCHIMP_API_SERVER;
const AUDIENCE_ID = process.env.MAILCHIMP_API_AUDIENCE_ID;

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, contactNo, message } = await req.json();
    const contactFormData = { name, email, subject, contactNo, message };
    const errors = validateForm(contactFormData);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ error: errors }, { status: 400 });
    }

    const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

    const data = {
      email_address: email,
      status: "subscribed",
      tags: ["contact-form"],
      merge_fields: {
        NAME: name,
        SUBJECT: subject,
        CONTACTNO: contactNo,
        MESSAGE: message,
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

const validateForm = (contactFormData: {
  name: string;
  email: string;
  subject: string;
  contactNo: string;
  message: string;
}) => {
  try {
    contactFormSchema.parse(contactFormData);
    return {};
  } catch (err: any) {
    const fieldErrors: { [key: string]: string } = {};
    err.errors.forEach((error: any) => {
      fieldErrors[error.path[0]] = error.message;
    });
    return fieldErrors;
  }
};
