import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Mail, MapPin, Linkedin, Download, Code, Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-serif font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ponraj D
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-all duration-300 hover:scale-105 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <div className="relative inline-block">
              <img
                src="/Photo.jpg"
                alt="Ponraj D"
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary/30 shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 animate-pulse"></div>
            </div>
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-7xl mb-8 text-foreground animate-fade-in-up text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ponraj D</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200 text-pretty">
            Motivated Web Developer and B.Tech IT student with hands-on experience in front-end design and programming.
            Passionate about creating innovative solutions that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-400">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6 border-2 bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground text-balance">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-card-foreground text-pretty">
                I'm a passionate web developer and B.Tech IT student from Palani, Tamil Nadu, with a strong foundation
                in modern web technologies. My journey in technology is driven by curiosity and a commitment to building
                solutions that make a difference.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground text-pretty">
                Through my Infosys Springboard internship and academic projects, I've developed expertise in front-end
                development, responsive design, and clean coding practices. I'm particularly interested in AI-driven
                projects and their potential for social good.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground bg-background/50 p-4 rounded-lg border border-border/50">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Palani, Tamil Nadu, India</span>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <h3 className="font-bold text-lg">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-primary font-semibold">Information Technology</p>
                  <p className="text-muted-foreground font-medium">V.S.B. Engineering College, Karur</p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Sep 2023 – May 2027 (Ongoing)
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground text-balance">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
              <Card className="ml-16 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10">
                <CardHeader className="pb-4">
                  <div className="absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    Project Intern
                  </CardTitle>
                  <CardDescription className="text-base font-medium">
                    <span className="text-primary font-semibold">Infosys Springboard</span> • Oct 2024 – Dec 2024 •
                    Remote, India
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3 text-card-foreground">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contributed to a project as part of Infosys Springboard Internship 5.0</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Applied web technologies and coding practices to build structured solutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enhanced knowledge in scalable systems, debugging, and team collaboration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground text-balance">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  Web Development
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">HTML/CSS</span>
                    <span className="text-sm text-primary font-bold">90%</span>
                  </div>
                  <Progress value={90} className="h-3 bg-muted" />
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">JavaScript</span>
                    <span className="text-sm text-primary font-bold">85%</span>
                  </div>
                  <Progress value={85} className="h-3 bg-muted" />
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">Responsive Design</span>
                    <span className="text-sm text-primary font-bold">88%</span>
                  </div>
                  <Progress value={88} className="h-3 bg-muted" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Code className="h-6 w-6 text-accent" />
                  </div>
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">Python</span>
                    <span className="text-sm text-accent font-bold">80%</span>
                  </div>
                  <Progress value={80} className="h-3 bg-muted" />
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="font-semibold">Java</span>
                    <span className="text-sm text-accent font-bold">75%</span>
                  </div>
                  <Progress value={75} className="h-3 bg-muted" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10 group md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  Tools & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1 text-sm font-medium"
                  >
                    Git
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1 text-sm font-medium"
                  >
                    VS Code
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1 text-sm font-medium"
                  >
                    Bootstrap
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors px-3 py-1 text-sm font-medium"
                  >
                    SEO
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors px-3 py-1 text-sm font-medium"
                  >
                    Generative AI
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground text-balance">
            <span className="text-primary">Certifications</span> & Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  Infosys Springboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Internship Certificate</p>
                <Badge variant="outline" className="mt-2 border-primary/30 text-primary">
                  2024
                </Badge>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-accent/10 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  Advanced ChatGPT Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">SkillsFuture Certificate</p>
                <Badge variant="outline" className="mt-2 border-accent/30 text-accent">
                  Certified
                </Badge>
              </CardContent>
            </Card>

            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary/10 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  TATA Crucible Campus Quiz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">Participation Certificate</p>
                <Badge variant="outline" className="mt-2 border-primary/30 text-primary">
                  2024
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Me Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-card to-secondary/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-16 text-foreground text-balance">
            Why Choose <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-background/70 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-left font-medium text-lg">
                  1+ year hands-on web development experience (academic + internship projects)
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background/70 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-left font-medium text-lg">
                  Proficient in HTML, CSS, JavaScript with responsive design knowledge
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-background/70 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-left font-medium text-lg">Familiar with Git, SEO, and scalable coding practices</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-background/70 rounded-xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-left font-medium text-lg">
                  Strong foundation in AI concepts and passion for AI-for-Good initiatives
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-serif font-bold text-4xl md:text-5xl mb-8 text-foreground text-balance">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-pretty">
            I'm always open to discussing new opportunities and interesting projects. Let's build something amazing
            together!
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6"
            >
              <Mail className="mr-3 h-6 w-6" />
              ponrajsdr@gmail.com
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 text-lg px-8 py-6 border-2 bg-transparent"
            >
              <Linkedin className="mr-3 h-6 w-6" />
              LinkedIn Profile
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-muted to-secondary/50 py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-lg font-medium">
            © 2024 Ponraj D. Built with passion and modern web technologies.
          </p>
          <p className="text-muted-foreground/70 text-sm mt-2">
            Crafted with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </footer>
    </div>
  )
}
