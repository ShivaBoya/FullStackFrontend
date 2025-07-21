import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  FileText,
  Download,
  Users,
  Zap,
  CheckCircle,
  ShieldCheck,
  Brain,
  Star,
  ArrowRight,
  Play,
  Briefcase,
  GraduationCap,
  Code,
  Palette,
  Stethoscope,
  Megaphone,
  ChevronRight,
  Quote,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Professional Templates",
      description:
        "Choose from 50+ ATS-friendly resume templates designed by HR professionals and career experts.",
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Real-time Preview",
      description:
        "See your resume update instantly as you type with our live preview technology.",
    },
    {
      icon: <Download className="h-8 w-8 text-purple-600" />,
      title: "Multiple Export Formats",
      description:
        "Download in PDF, DOCX, TXT, or share via link. Perfect for any application system.",
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Team Collaboration",
      description:
        "Get feedback from mentors, career coaches, and colleagues with shared editing.",
    },
    {
      icon: <Brain className="h-8 w-8 text-pink-600" />,
      title: "AI-Powered Optimization",
      description:
        "Smart suggestions for keywords, phrases, and content to beat ATS systems.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-emerald-600" />,
      title: "Privacy & Security",
      description:
        "Your data is encrypted and secure. GDPR compliant with enterprise-grade security.",
    },
  ];

  const templateCategories = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business & Finance",
      count: "12 templates",
      color: "bg-blue-100 text-blue-700",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technology & IT",
      count: "15 templates",
      color: "bg-green-100 text-green-700",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative & Design",
      count: "10 templates",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare",
      count: "8 templates",
      color: "bg-red-100 text-red-700",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      count: "6 templates",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Marketing & Sales",
      count: "9 templates",
      color: "bg-pink-100 text-pink-700",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Choose Your Perfect Template",
      description:
        "Browse our curated collection of industry-specific templates. Each one is designed to pass ATS systems and impress hiring managers.",
      image: "/placeholder.svg?height=200&width=300&text=Template+Selection",
    },
    {
      step: "02",
      title: "Smart Content Input",
      description:
        "Our intelligent forms guide you through each section with helpful tips, examples, and AI-powered suggestions.",
      image: "/placeholder.svg?height=200&width=300&text=Content+Input",
    },
    {
      step: "03",
      title: "Real-time Customization",
      description:
        "Personalize colors, fonts, and layouts while seeing instant previews. Make it uniquely yours.",
      image: "/placeholder.svg?height=200&width=300&text=Customization",
    },
    {
      step: "04",
      title: "Export & Apply",
      description:
        "Download in multiple formats, share via link, or apply directly to job boards. Track your applications too.",
      image: "/placeholder.svg?height=200&width=300&text=Export+Apply",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "/placeholder.svg?height=60&width=60&text=SJ",
      content:
        "ResumeBuilder helped me land my dream job at Google. The ATS optimization feature was a game-changer!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Marketing Director at Meta",
      image: "/placeholder.svg?height=60&width=60&text=MC",
      content:
        "The templates are incredibly professional and the AI suggestions improved my resume significantly.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Apple",
      image: "/placeholder.svg?height=60&width=60&text=ER",
      content:
        "I got 3x more interview calls after using ResumeBuilder. The design templates are outstanding!",
      rating: 5,
    },
  ];

  const stats = [
    { number: "2M+", label: "Resumes Created" },
    { number: "89%", label: "Success Rate" },
    { number: "50+", label: "Templates" },
    { number: "24/7", label: "Support" },
  ];

  const pricingPlans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "3 resume templates",
        "Basic customization",
        "PDF download",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "Most popular for job seekers",
      features: [
        "50+ premium templates",
        "AI-powered optimization",
        "All export formats",
        "Cover letter builder",
        "Priority support",
        "LinkedIn integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$29.99",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Custom branding",
        "Analytics dashboard",
        "Dedicated support",
        "API access",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Background+Pattern')] opacity-10"></div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">
            🎉 New: AI-Powered Resume Optimization
          </Badge>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
            Build Your
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Dream Resume{" "}
            </span>
            in Minutes
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Create professional, ATS-friendly resumes with our AI-powered
            builder. Join over 2 million job seekers who landed their dream
            jobs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                  {stat.number}
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Templates for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our professionally designed templates, each optimized
              for specific industries and roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateCategories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500">
                    {category.count}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    View Templates
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Features</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help you create the perfect resume
              and land your dream job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gray-50 rounded-2xl">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">
              Process
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 4-step process gets you from blank page to professional
              resume in minutes.
            </p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center gap-12`}
              >
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <Link to="/templates">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={
                        "https://s.tmimgcdn.com/scr/800x500/115800/beautiful-cv-elegant-stylish-design-resume-template_115825-original.jpg"
                      }
                      alt={step.title || "Step Image"}
                      className="rounded-2xl shadow-2xl w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how ResumeBuilder helped professionals land their dream jobs
              at top companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 text-gray-400 mb-2" />
                  <p className="text-gray-700 italic leading-relaxed">
                    {testimonial.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and upgrade when you're ready. All plans include our
              core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? "ring-2 ring-blue-600 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {plan.name === "Free" ? "Get Started" : "Start Free Trial"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 text-blue-100 leading-relaxed">
            Join over 2 million professionals who have successfully built their
            careers with ResumeBuilder. Start your journey today - it's
            completely free!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              >
                Create Your Resume Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/templates">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 text-lg"
              >
                Browse Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">ResumeBuilder</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The world's most advanced resume builder platform. Trusted by
                over 2 million professionals to create stunning resumes that get
                results.
              </p>

              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
                  asChild
                >
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>

                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Product */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Product</h5>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    to="/templates"
                    className="hover:text-white transition-colors"
                  >
                    Resume Templates
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cover-letters"
                    className="hover:text-white transition-colors"
                  >
                    Cover Letters
                  </Link>
                </li>
                <li>
                  <Link
                    to="/features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/examples"
                    className="hover:text-white transition-colors"
                  >
                    Resume Examples
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Resources</h5>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    to="/resume-tips"
                    className="hover:text-white transition-colors"
                  >
                    Resume Tips
                  </Link>
                </li>
                <li>
                  <Link
                    to="/career-advice"
                    className="hover:text-white transition-colors"
                  >
                    Career Advice
                  </Link>
                </li>
                <li>
                  <Link
                    to="/interview-guide"
                    className="hover:text-white transition-colors"
                  >
                    Interview Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="font-semibold mb-4 text-white">Company</h5>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="hover:text-white transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ResumeBuilder. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@resumebuilder.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>1-800-RESUME</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
