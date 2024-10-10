import { useState } from 'react';
import  Button  from "../UI/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../UI/Card";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../UI/Dialog";
import { ScrollArea } from "../UI/ScrollArea";
import { FileIcon, DownloadIcon } from 'lucide-react';

export default function JobListing() {
  const [profileCompletion, setProfileCompletion] = useState(75);

  const jobListings = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Tech Corp",
      location: "New York, NY",
      description: "We are seeking a talented Software Engineer to join our dynamic team. The ideal candidate will have strong programming skills and a passion for creating innovative solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in software development",
        "Proficiency in JavaScript, React, and Node.js",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
      ],
      responsibilities: [
        "Develop and maintain web applications",
        "Collaborate with cross-functional teams",
        "Participate in code reviews and architectural discussions",
        "Optimize application performance and scalability",
      ],
      salary: "$80,000 - $120,000",
      jobType: "Full-time",
      documents: [
        { name: "Job Description.pdf", url: "/documents/job-description-1.pdf" },
        { name: "Company Overview.docx", url: "/documents/company-overview-1.docx" },
      ],
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Data Insights Inc.",
      location: "San Francisco, CA",
      description: "Data Insights Inc. is looking for a skilled Data Analyst to help interpret complex data sets and provide actionable insights to our clients.",
      requirements: [
        "Bachelor's degree in Statistics, Mathematics, or related field",
        "2+ years of experience in data analysis",
        "Proficiency in SQL, Python, and data visualization tools",
        "Strong analytical and problem-solving skills",
      ],
      responsibilities: [
        "Analyze large datasets and create meaningful reports",
        "Develop and maintain dashboards for key business metrics",
        "Collaborate with stakeholders to understand data needs",
        "Identify trends and patterns to support decision-making",
      ],
      salary: "$70,000 - $100,000",
      jobType: "Full-time",
      documents: [
        { name: "Data Analyst Role.pdf", url: "/documents/data-analyst-role.pdf" },
      ],
    },
    {
      id: 3,
      title: "UX Designer",
      company: "Creative Solutions",
      location: "Chicago, IL",
      description: "Join our UX team to create intuitive and engaging user experiences for web and mobile applications. Strong portfolio and knowledge of design tools required.",
      requirements: [
        "Bachelor's degree in Design, HCI, or related field",
        "3+ years of experience in UX/UI design",
        "Proficiency in design tools (Figma, Sketch, Adobe XD)",
        "Strong portfolio demonstrating user-centered design process",
      ],
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Collaborate with product managers and developers",
        "Advocate for user needs throughout the product development lifecycle",
      ],
      salary: "$75,000 - $110,000",
      jobType: "Full-time",
      documents: [
        { name: "UX Designer Job Details.pdf", url: "/documents/ux-designer-job-details.pdf" },
        { name: "Design Challenge.pdf", url: "/documents/design-challenge.pdf" },
      ],
    },
  ];

  const upcomingEvents = [
    { id: 1, title: "Career Fair", date: "2023-06-15", time: "10:00 AM - 4:00 PM" },
    { id: 2, title: "Resume Workshop", date: "2023-06-20", time: "2:00 PM - 3:30 PM" },
    { id: 3, title: "Mock Interviews", date: "2023-06-25", time: "9:00 AM - 12:00 PM" },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1> */}
          <Card>
            <CardHeader>
              <CardTitle>Available Job Listings</CardTitle>
              <CardDescription>Explore and apply for job opportunities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobListings.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.company} - {job.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-between items-center">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">View Details</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>{job.title}</DialogTitle>
                            <DialogDescription>{job.company} - {job.location}</DialogDescription>
                          </DialogHeader>
                          <ScrollArea className="max-h-[60vh] overflow-auto">
                            <div className="space-y-4">
                              <section>
                                <h3 className="text-lg font-semibold">Job Description</h3>
                                <p>{job.description}</p>
                              </section>
                              <section>
                                <h3 className="text-lg font-semibold">Requirements</h3>
                                <ul className="list-disc list-inside">
                                  {job.requirements.map((req, index) => (
                                    <li key={index}>{req}</li>
                                  ))}
                                </ul>
                              </section>
                              <section>
                                <h3 className="text-lg font-semibold">Responsibilities</h3>
                                <ul className="list-disc list-inside">
                                  {job.responsibilities.map((resp, index) => (
                                    <li key={index}>{resp}</li>
                                  ))}
                                </ul>
                              </section>
                              <section>
                                <h3 className="text-lg font-semibold">Additional Information</h3>
                                <p><strong>Salary Range:</strong> {job.salary}</p>
                                <p><strong>Job Type:</strong> {job.jobType}</p>
                              </section>
                              <section>
                                <h3 className="text-lg font-semibold">Documents</h3>
                                <div className="space-y-2">
                                  {job.documents.map((doc, index) => (
                                    <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                                      <div className="flex items-center">
                                        <FileIcon className="mr-2 h-4 w-4" />
                                        <span>{doc.name}</span>
                                      </div>
                                      <a
                                        href={doc.url}
                                        download
                                        className="flex items-center text-blue-600 hover:text-blue-800"
                                      >
                                        <DownloadIcon className="mr-1 h-4 w-4" />
                                        Download
                                      </a>
                                    </div>
                                  ))}
                                </div>
                              </section>
                            </div>
                          </ScrollArea>
                          <div className="mt-4 flex justify-end">
                            <Button>Apply Now</Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button>Apply Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        {/* </TabsContent> */}

        {/* <TabsContent value="jobListing"> */}
          {/* <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Stay informed about career events and workshops</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Card key={event.id}>
                    <CardHeader>
                      <CardTitle>{event.title}</CardTitle>
                      <CardDescription>{event.date} at {event.time}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button>Register</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card> */}
        {/* </TabsContent> */}
      {/* </Tabs> */}
    </div>
  );
}