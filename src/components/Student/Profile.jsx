import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Label from "../UI/Label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../UI/Card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../UI/Select";
import { PencilIcon, SaveIcon } from "lucide-react";

const initialProfile = {
  name: "John Doe",
  gender: "Male",
  email: "johndoe@example.com",
  contactNumber: "+1234567890",
  dob: "1998-05-15",
  nativePlace: "Springfield",
  state: "Illinois",
  tenthPercentage: "92",
  twelfthPercentage: "88",
  graduation: {
    college: "Springfield University",
    percentage: "8.5",
    specialization: "Computer Science",
  },
  postGraduation: {
    college: "State Tech University",
    percentage: "9.2",
    specialization: "Data Science",
  },
  certifications: [
    {
      name: "AWS Certified Developer",
      link: "https://aws.amazon.com/certification/certified-developer-associate/",
    },
  ],
  internships: [
    {
      company: "Tech Solutions Inc.",
      designation: "Software Developer Intern",
      period: "May 2022 - Aug 2022",
    },
  ],
  majorSpecialization: "Machine Learning",
  minorSpecialization: "Web Development",
  resumeLink: "https://example.com/johndoe-resume.pdf",
};

export default function Profile() {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e, section = null) => {
    const { name, value } = e.target;
    if (section) {
      setProfile((prev) => ({
        ...prev,
        [section]: { ...prev[section], [name]: value },
      }));
    } else {
      setProfile((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    // Here you would typically send the updated profile to your backend
    console.log("Saving profile:", profile);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold flex justify-between items-center">
            Student Profile
            <Button
              onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
            >
              {isEditing ? (
                <SaveIcon className="mr-2 h-4 w-4" />
              ) : (
                <PencilIcon className="mr-2 h-4 w-4" />
              )}
              {isEditing ? "Save" : "Edit"}
            </Button>
          </CardTitle>
          <CardDescription>
            Manage your personal and academic information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gender">Gender</Label>
                <Select
                  name="gender"
                  value={profile.gender}
                  onValueChange={(value) =>
                    handleInputChange({ target: { name: "gender", value } })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactNumber">Contact Number</Label>
                <Input
                  id="contactNumber"
                  name="contactNumber"
                  value={profile.contactNumber}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  value={profile.dob}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nativePlace">Native Place</Label>
                <Input
                  id="nativePlace"
                  name="nativePlace"
                  value={profile.nativePlace}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input
                  id="state"
                  name="state"
                  value={profile.state}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tenthPercentage">10th Percentage</Label>
                <Input
                  id="tenthPercentage"
                  name="tenthPercentage"
                  value={profile.tenthPercentage}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twelfthPercentage">12th Percentage</Label>
                <Input
                  id="twelfthPercentage"
                  name="twelfthPercentage"
                  value={profile.twelfthPercentage}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Graduation Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="graduationCollege">College Name</Label>
                  <Input
                    id="graduationCollege"
                    name="college"
                    value={profile.graduation.college}
                    onChange={(e) => handleInputChange(e, "graduation")}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduationPercentage">Percentage/CGPA</Label>
                  <Input
                    id="graduationPercentage"
                    name="percentage"
                    value={profile.graduation.percentage}
                    onChange={(e) => handleInputChange(e, "graduation")}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="graduationSpecialization">
                    Specialization
                  </Label>
                  <Input
                    id="graduationSpecialization"
                    name="specialization"
                    value={profile.graduation.specialization}
                    onChange={(e) => handleInputChange(e, "graduation")}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">
                Post Graduation Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pgCollege">College Name</Label>
                  <Input
                    id="pgCollege"
                    name="college"
                    value={profile.postGraduation.college}
                    onChange={(e) => handleInputChange(e, "postGraduation")}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pgPercentage">Percentage/CGPA</Label>
                  <Input
                    id="pgPercentage"
                    name="percentage"
                    value={profile.postGraduation.percentage}
                    onChange={(e) => handleInputChange(e, "postGraduation")}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pgSpecialization">Specialization</Label>
                  <Input
                    id="pgSpecialization"
                    name="specialization"
                    value={profile.postGraduation.specialization}
                    onChange={(e) => handleInputChange(e, "postGraduation")}
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Certifications</h3>
              {profile.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor={`certName${index}`}>
                      Certification Name
                    </Label>
                    <Input
                      id={`certName${index}`}
                      name="name"
                      value={cert.name}
                      onChange={(e) => {
                        const newCerts = [...profile.certifications];
                        newCerts[index].name = e.target.value;
                        setProfile((prev) => ({
                          ...prev,
                          certifications: newCerts,
                        }));
                      }}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`certLink${index}`}>Certificate Link</Label>
                    <Input
                      id={`certLink${index}`}
                      name="link"
                      value={cert.link}
                      onChange={(e) => {
                        const newCerts = [...profile.certifications];
                        newCerts[index].link = e.target.value;
                        setProfile((prev) => ({
                          ...prev,
                          certifications: newCerts,
                        }));
                      }}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              ))}
              {isEditing && (
                <Button
                  type="button"
                  onClick={() =>
                    setProfile((prev) => ({
                      ...prev,
                      certifications: [
                        ...prev.certifications,
                        { name: "", link: "" },
                      ],
                    }))
                  }
                >
                  Add Certification
                </Button>
              )}
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Internship Experience</h3>
              {profile.internships.map((internship, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor={`internCompany${index}`}>
                      Company Name
                    </Label>
                    <Input
                      id={`internCompany${index}`}
                      name="company"
                      value={internship.company}
                      onChange={(e) => {
                        const newInternships = [...profile.internships];
                        newInternships[index].company = e.target.value;
                        setProfile((prev) => ({
                          ...prev,
                          internships: newInternships,
                        }));
                      }}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`internDesignation${index}`}>
                      Designation
                    </Label>
                    <Input
                      id={`internDesignation${index}`}
                      name="designation"
                      value={internship.designation}
                      onChange={(e) => {
                        const newInternships = [...profile.internships];
                        newInternships[index].designation = e.target.value;
                        setProfile((prev) => ({
                          ...prev,
                          internships: newInternships,
                        }));
                      }}
                      disabled={!isEditing}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`internPeriod${index}`}>Period</Label>
                    <Input
                      id={`internPeriod${index}`}
                      name="period"
                      value={internship.period}
                      onChange={(e) => {
                        const newInternships = [...profile.internships];
                        newInternships[index].period = e.target.value;
                        setProfile((prev) => ({
                          ...prev,
                          internships: newInternships,
                        }));
                      }}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              ))}
              {isEditing && (
                <Button
                  type="button"
                  onClick={() =>
                    setProfile((prev) => ({
                      ...prev,
                      internships: [
                        ...prev.internships,
                        { company: "", designation: "", period: "" },
                      ],
                    }))
                  }
                >
                  Add Internship
                </Button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="majorSpecialization">
                  Major Specialization
                </Label>
                <Input
                  id="majorSpecialization"
                  name="majorSpecialization"
                  value={profile.majorSpecialization}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="minorSpecialization">
                  Minor Specialization
                </Label>
                <Input
                  id="minorSpecialization"
                  name="minorSpecialization"
                  value={profile.minorSpecialization}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="resumeLink">Resume Link</Label>
              <Input
                id="resumeLink"
                name="resumeLink"
                value={profile.resumeLink}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>

            {isEditing && (
              <Button type="button" onClick={handleSave} className="w-full">
                Save Profile
              </Button>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
