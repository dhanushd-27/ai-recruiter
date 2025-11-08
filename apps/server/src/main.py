from google import genai
from dotenv import load_dotenv
from google.genai import types
import os

# Load environment variables from .env file
load_dotenv()

# The client gets the API key from the environment variable `GEMINI_API_KEY`.
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

system_prompt = os.getenv("SYSTEM_PROMPT")

print(system_prompt)

job_description = input("Enter the job description: ")
job_role = input("Enter the job role: ")
year_of_experience = input("Enter the year of experience needed: ")

# Generate interview questions based on the job description
prompt = (
    f"Given the following job details:\n"
    f"- Job description: {job_description}\n"
    f"- Job role: {job_role}\n"
    f"- Years of experience needed: {year_of_experience}\n\n"
    "Please generate a list of bullet-pointed interview questions that would help a candidate prepare for this job."
)

response = client.models.generate_content(
    model="gemini-2.5-flash",
    config=types.GenerateContentConfig(
        system_instruction=str(system_prompt)),
    contents=str(prompt),
)

print(response.text)