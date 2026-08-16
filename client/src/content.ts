// SOAR Sunlit Study Hall style: factual, warm, editorial, and structured for easy updates.
export const siteContent = {
  name: "SOAR",
  fullName: "Student Organized Academic Refinement",
  email: "jasperhs.soar@gmail.com",
  logo: "/manus-storage/soar-supplied-logo_0fcdc093.png",
  generatedIcon: "/manus-storage/soar-brand-icon_7aba9966.png",
  heroImage: "/manus-storage/soar-hero-paper_a685805b.png",
  studyImage: "/manus-storage/soar-study-desk_bf4a830a.png",
  patternImage: "/manus-storage/soar-orbit-pattern_12a9d184.png",
  metrics: [
    { value: "7,500+", label: "students reached", detail: "Organization-provided current figure" },
    { value: "100+", label: "tutoring sessions", detail: "Virtual and in-person sessions led" },
    { value: "50+", label: "study guides", detail: "Curriculum-aligned resources created" },
    { value: "40+", label: "subjects supported", detail: "From Algebra through AP Literature" },
  ],
  subjects: [
    { name: "Mathematics", count: "Algebra, Geometry, Calculus", icon: "∑", tint: "gold" },
    { name: "Science", count: "Biology, Chemistry, Physics", icon: "✦", tint: "sky" },
    { name: "English", count: "Writing, Literature, Rhetoric", icon: "Aa", tint: "navy" },
    { name: "Social Studies", count: "History, Government, Economics", icon: "◫", tint: "cream" },
    { name: "World Languages", count: "Practice, grammar, conversation", icon: "文", tint: "sky" },
    { name: "Test Prep", count: "Review plans and practice sets", icon: "✓", tint: "gold" },
  ],
  resources: [
    { title: "The review map", type: "Study guide", subject: "All subjects", description: "A simple way to turn a big unit into a short, workable review plan." },
    { title: "Practice, then explain", type: "Session note", subject: "Mathematics", description: "Use worked examples and peer explanation to find the step that needs another look." },
    { title: "AP Literature lens cards", type: "Resource set", subject: "English", description: "Prompting questions for noticing structure, voice, evidence, and interpretation." },
  ],
  schools: ["Plano West Senior High School", "Plano Senior High School", "Plano East Senior High School", "Jasper High School", "Shepton High School", "Clark High School"],
  coverage: [
    { publisher: "NBC DFW", title: "Plano ISD Students Help Each Other Achieve Success Through Study Sessions", date: "December 18, 2022", description: "NBC DFW covered student-led study sessions in Plano ISD and the growth of the model through more student leaders and schools.", url: "https://www.nbcdfw.com/news/local/carter-in-the-classroom/plano-isd-students-help-each-other-achieve-success-through-study-sessions/3152940/" },
    { publisher: "Panther Prints", title: "Progression of SOAR", date: "October 18, 2022", description: "The student newspaper described SOAR’s virtual peer tutoring, study materials, chat rooms, and evolving district-wide model.", url: "https://www.peshprints.com/features/2022/10/18/progression-of-soar/" },
    { publisher: "LinkedIn", title: "Student Organized Academic Refinement on LinkedIn", date: "Organization page", description: "SOAR’s public organization page describes an organized, peer-led study-session community.", url: "https://www.linkedin.com/company/soargroup" },
  ],
  leadership: [
    { name: "Ishaan Khera", role: "CEO / President", note: "Leadership detail supplied by SOAR." },
    { name: "Goutham Ronanki", role: "CEO / President", note: "Leadership detail supplied by SOAR." },
  ],
};

export const sourceNotes = [
  { label: "NBC DFW", url: siteContent.coverage[0].url, supports: "Student-led sessions and expansion across Plano ISD." },
  { label: "Panther Prints", url: siteContent.coverage[1].url, supports: "SOAR history, peer tutoring, online resources, and subject support." },
  { label: "SOAR on LinkedIn", url: siteContent.coverage[2].url, supports: "Public organization description and student-led model." },
];
