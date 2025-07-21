

import { useState, useEffect } from "react";
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
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import {
  FileText,
  Download,
  Users,
  Zap,
  CheckCircle,
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
  TrendingUp,
  Clock,
  Crown,
  Shield,
  Rocket,
  Settings,
  Layers,
} from "lucide-react";

const HomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "AI-Powered Resume Builder",
      description:
        "Smart suggestions and content optimization powered by advanced AI technology.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Lightning Fast Creation",
      description:
        "Build professional resumes in under 5 minutes with our streamlined process.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "ATS-Optimized Templates",
      description:
        "All templates are designed to pass Applicant Tracking Systems with 95%+ success rate.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Palette className="h-8 w-8 text-purple-600" />,
      title: "50+ Professional Templates",
      description:
        "Choose from industry-specific templates designed by HR professionals.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Download className="h-8 w-8 text-indigo-600" />,
      title: "Multiple Export Formats",
      description:
        "Download in PDF, DOCX, TXT, or share via link. Perfect for any application.",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Team Collaboration",
      description:
        "Get feedback from mentors and colleagues with real-time collaboration tools.",
      color: "from-red-500 to-pink-500",
    },
  ];

  const stats = [
    { number: "2M+", label: "Resumes Created", icon: FileText },
    { number: "89%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Templates", icon: Layers },
    { number: "24/7", label: "Support", icon: Clock },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      image: "/placeholder.svg?height=60&width=60&text=SJ",
      content:
        "ResumeBuilder helped me land my dream job at Google. The AI suggestions were incredibly helpful!",
      rating: 5,
      company: "Google",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director at Meta",
      image: "/placeholder.svg?height=60&width=60&text=MC",
      content:
        "The templates are professional and the ATS optimization feature is a game-changer.",
      rating: 5,
      company: "Meta",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Apple",
      image: "/placeholder.svg?height=60&width=60&text=ER",
      content:
        "I got 3x more interview calls after using ResumeBuilder. Highly recommended!",
      rating: 5,
      company: "Apple",
    },
    {
      name: "David Kim",
      role: "Data Scientist at Netflix",
      image: "/placeholder.svg?height=60&width=60&text=DK",
      content:
        "The AI-powered suggestions helped me highlight my achievements perfectly.",
      rating: 5,
      company: "Netflix",
    },
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
        "1 resume creation",
      ],
      popular: false,
      cta: "Get Started Free",
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
        "Unlimited resumes",
        "Analytics dashboard",
      ],
      popular: true,
      cta: "Start Free Trial",
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
        "Advanced analytics",
        "Dedicated support",
        "API access",
        "Bulk operations",
        "Custom integrations",
      ],
      popular: false,
      cta: "Contact Sales",
    },
  ];

  const templateCategories = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Business & Finance",
      count: "12 templates",
      color: "bg-blue-100 text-blue-700",
      image: "/placeholder.svg?height=200&width=150&text=Business",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technology & IT",
      count: "15 templates",
      color: "bg-green-100 text-green-700",
      image: "/placeholder.svg?height=200&width=150&text=Tech",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Creative & Design",
      count: "10 templates",
      color: "bg-purple-100 text-purple-700",
      image: "/placeholder.svg?height=200&width=150&text=Creative",
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: "Healthcare",
      count: "8 templates",
      color: "bg-red-100 text-red-700",
      image: "/placeholder.svg?height=200&width=150&text=Healthcare",
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      count: "6 templates",
      color: "bg-yellow-100 text-yellow-700",
      image: "/placeholder.svg?height=200&width=150&text=Education",
    },
    {
      icon: <Megaphone className="h-6 w-6" />,
      title: "Marketing & Sales",
      count: "9 templates",
      color: "bg-pink-100 text-pink-700",
      image: "/placeholder.svg?height=200&width=150&text=Marketing",
    },
  ];

  const faqs = [
    {
      question: "Is ResumeBuilder really free?",
      answer:
        "Yes! Our free plan includes 3 professional templates, basic customization, and PDF download. You can create a complete resume without paying anything.",
    },
    {
      question: "Are the templates ATS-friendly?",
      answer:
        "All our templates are designed to pass Applicant Tracking Systems (ATS) with a 95%+ success rate. We regularly test them with major ATS platforms.",
    },
    {
      question: "Can I edit my resume after downloading?",
      answer:
        "Yes! You can always come back to edit your resume. We save your progress automatically, and Pro users get unlimited edits and downloads.",
    },
    {
      question: "How does the AI optimization work?",
      answer:
        "Our AI analyzes your content and provides personalized suggestions for keywords, phrasing, and structure based on your industry and target role.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Yes, you can cancel your subscription at any time. You'll continue to have access to Pro features until the end of your billing period.",
    },
  ];

  return (
    <div className="font-sans bg-white text-gray-800 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200&text=Background+Pattern')] opacity-10"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/20 rounded-full animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-fade-in">
            🎉 New: AI-Powered Resume Optimization
          </Badge>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Build Your
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Dream Resume{" "}
            </span>
            in Minutes
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-200">
            Create professional, ATS-friendly resumes with our AI-powered
            builder. Join over 2 million job seekers who landed their dream jobs
            with our platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up delay-400">
            <Link to="/templates">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
              >
                Start Building Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 text-lg shadow-xl"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up delay-600">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-yellow-400 mr-2" />
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400">
                    {stat.number}
                  </div>
                </div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50" id="features" data-animate>
        <div className="max-w-7xl mx-auto px-6">
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
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-6">
                    <div
                      className={`p-4 bg-gradient-to-r ${feature.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{feature.icon}</div>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 text-center group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Template Categories */}
      <section className="py-20 bg-white" id="templates" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">
              Templates
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Templates for Every Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our professionally designed templates, each optimized
              for specific industries and roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templateCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      category.image && category.image.startsWith("http")
                        ? category.image
                        : "https://img.freepik.com/premium-vector/professional-modern-minimal-resume-cv-design-template-attractive-online-curriculum-template_722818-616.jpg"
                    }
                    alt={category.title || "Resume Preview"}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      className="bg-white text-gray-900 hover:bg-gray-100"
                    >
                      View Templates
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
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
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/templates">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">
                View All Templates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
        id="how-it-works"
        data-animate
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">Process</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple 4-step process gets you from blank page to professional
              resume in minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Template",
                description:
                  "Select from 50+ professional templates designed for your industry.",
                icon: <Palette className="w-8 h-8" />,
                color: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Add Your Info",
                description:
                  "Fill in your details with AI-powered suggestions and tips.",
                icon: <Brain className="w-8 h-8" />,
                color: "from-green-500 to-emerald-500",
              },
              {
                step: "03",
                title: "Customize Design",
                description:
                  "Personalize colors, fonts, and layouts to match your style.",
                icon: <Settings className="w-8 h-8" />,
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "04",
                title: "Download & Apply",
                description:
                  "Export in multiple formats and start applying to jobs.",
                icon: <Download className="w-8 h-8" />,
                color: "from-orange-500 to-red-500",
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <CardHeader>
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}
                    >
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white" id="testimonials" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-yellow-100 text-yellow-700">
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

          <div className="relative">
            <Card className="max-w-4xl mx-auto shadow-2xl border-0">
              <CardContent className="p-12">
                <div className="text-center">
                  <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                  <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src={
                          testimonials[currentTestimonial].image ||
                          "/placeholder.svg"
                        }
                      />
                      <AvatarFallback className="bg-blue-600 text-white text-xl">
                        {testimonials[currentTestimonial].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-semibold text-lg text-gray-900">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="flex gap-1 mt-1">
                        {[
                          ...Array(testimonials[currentTestimonial].rating),
                        ].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50" id="pricing" data-animate>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">Pricing</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free and upgrade when you're ready. All plans include our
              core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative hover:shadow-2xl transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-blue-600 scale-105 shadow-2xl"
                    : "shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-6 py-2 text-sm">
                      <Crown className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <CardDescription className="mt-2 text-lg">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="space-y-4">
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
                    className={`w-full mt-8 py-3 text-lg ${
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-900 hover:bg-gray-800"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" id="faq" data-animate>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about ResumeBuilder.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-left">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Rocket className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Land Your Dream Job?
            </h2>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Join over 2 million professionals who have successfully built
              their careers with ResumeBuilder. Start your journey today - it's
              completely free!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
              >
                Create Your Resume Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/templates">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8 py-4 text-lg shadow-xl"
              >
                Browse Templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <FileText className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">ResumeBuilder</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                The world's most advanced resume builder platform. Trusted by
                over 2 million professionals to create stunning resumes that get
                results.
              </p>
              <div className="flex gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-700 text-gray-400 hover:text-white bg-transparent"
                >
                  <Instagram className="h-4 w-4" />
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
              © 2025 ResumeBuilder Pro. All rights reserved.
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

      {/* Custom Styles for Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
