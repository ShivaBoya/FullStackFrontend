

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { Input } from "../components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "../components/ui/tabs"
import {
  Eye,
  Star,
  Search,
  Download,
  Heart,
  Briefcase,
  Code,
  Palette,
  Stethoscope,
  GraduationCap,
  Megaphone,
  Crown,
  Zap,
  Shield,
} from "lucide-react"

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [favorites, setFavorites] = useState([])

  const categories = [
    { id: "all", name: "All Templates", icon: <Star className="w-4 h-4" />, count: 24 },
    { id: "business", name: "Business", icon: <Briefcase className="w-4 h-4" />, count: 6 },
    { id: "technology", name: "Technology", icon: <Code className="w-4 h-4" />, count: 5 },
    { id: "creative", name: "Creative", icon: <Palette className="w-4 h-4" />, count: 4 },
    { id: "healthcare", name: "Healthcare", icon: <Stethoscope className="w-4 h-4" />, count: 3 },
    { id: "education", name: "Education", icon: <GraduationCap className="w-4 h-4" />, count: 3 },
    { id: "marketing", name: "Marketing", icon: <Megaphone className="w-4 h-4" />, count: 3 },
  ]

  const templates = [
    // Business Templates
    {
      id: "modern-professional",
      name: "Modern Professional",
      description: "Clean and contemporary design perfect for business professionals and managers",
      category: "business",
      image: "https://resumegenius.com/wp-content/uploads/resume-design-millennial-colorful-resume-template.png",
      popular: true,
      ats: true,
      premium: false,
      rating: 4.9,
      downloads: "125K+",
      tags: ["Professional", "Clean", "Modern"],
    },
    {
      id: "executive-elite",
      name: "Executive Elite",
      description: "Sophisticated template designed for C-level executives and senior management",
      category: "business",
      image: "https://img.freepik.com/premium-vector/professional-cv-resume-template-design_490643-379.jpg",
      popular: true,
      ats: true,
      premium: true,
      rating: 4.8,
      downloads: "89K+",
      tags: ["Executive", "Luxury", "Corporate"],
    },
    {
      id: "corporate-classic",
      name: "Corporate Classic",
      description: "Traditional format ideal for corporate environments and formal industries",
      category: "business",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpaHlUs9cZepgG8h7S1xK6qm6LnG73ONcPtg&s",
      popular: false,
      ats: true,
      premium: false,
      rating: 4.7,
      downloads: "67K+",
      tags: ["Traditional", "Corporate", "Formal"],
    },
    {
      id: "startup-founder",
      name: "Startup Founder",
      description: "Dynamic template for entrepreneurs and startup professionals",
      category: "business",
      image: "https://s3.eu-west-2.amazonaws.com/resumedone-eu-west-2-staging/Mc4rK6S97e-photo.png",
      popular: true,
      ats: true,
      premium: true,
      rating: 4.9,
      downloads: "92K+",
      tags: ["Startup", "Dynamic", "Innovative"],
    },
    {
      id: "consultant-pro",
      name: "Consultant Pro",
      description: "Professional template tailored for consultants and advisory roles",
      category: "business",
      image: "https://www.resumebuilder.com/wp-content/uploads/2024/06/Business-Owner-Resume-Examples-Mid-Career.png",
      popular: false,
      ats: true,
      premium: false,
      rating: 4.6,
      downloads: "54K+",
      tags: ["Consulting", "Advisory", "Professional"],
    },
    {
      id: "finance-expert",
      name: "Finance Expert",
      description: "Structured template perfect for finance and accounting professionals",
      category: "business",
      image: "https://marketplace.canva.com/EAGsw3GKBuc/2/0/1131w/canva-navy-and-white-simple-professional-cv-resume-MH-d6n0I7zU.jpg",
      popular: false,
      ats: true,
      premium: true,
      rating: 4.8,
      downloads: "71K+",
      tags: ["Finance", "Accounting", "Numbers"],
    },

    // Technology Templates
    {
      id: "tech-innovator",
      name: "Tech Innovator",
      description: "Modern template designed for software engineers and tech professionals",
      category: "technology",
      image: "https://cdn.enhancv.com/predefined-examples/ozepeArkc4hZhbl5wjf3CwmHvvE43AGh2lpQYqiv/image.png",
      popular: true,
      ats: true,
      premium: false,
      rating: 4.9,
      downloads: "156K+",
      tags: ["Tech", "Software", "Innovation"],
    },
    {
      id: "full-stack-dev",
      name: "Full Stack Developer",
      description: "Comprehensive template showcasing both frontend and backend skills",
      category: "technology",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyrz5gYDBg5V_KaEJF8KZqGnBtzOmin6GPw&s",
      popular: true,
      ats: true,
      premium: true,
      rating: 4.8,
      downloads: "134K+",
      tags: ["Full Stack", "Development", "Coding"],
    },
    {
      id: "data-scientist",
      name: "Data Scientist",
      description: "Analytics-focused template for data scientists and ML engineers",
      category: "technology",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9R8OZAf6oNYFOj1TcLqbD98i2y7cYrl0TSg&s",
      popular: false,
      ats: true,
      premium: true,
      rating: 4.7,
      downloads: "78K+",
      tags: ["Data Science", "Analytics", "ML"],
    },
    {
      id: "cybersecurity-pro",
      name: "Cybersecurity Pro",
      description: "Security-focused template for cybersecurity professionals",
      category: "technology",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyErl5nX6ujjkwXmN59IPKbZJEE-YNXNZ01w&s",
      popular: false,
      ats: true,
      premium: false,
      rating: 4.6,
      downloads: "45K+",
      tags: ["Security", "Cyber", "Protection"],
    },
    {
      id: "devops-engineer",
      name: "DevOps Engineer",
      description: "Infrastructure-focused template for DevOps and cloud engineers",
      category: "technology",
      image: "https://www.resumebuilder.com/wp-content/uploads/2023/01/Information-Technology-IT-Entry-Level.pdf.jpeg",
      popular: false,
      ats: true,
      premium: true,
      rating: 4.8,
      downloads: "63K+",
      tags: ["DevOps", "Cloud", "Infrastructure"],
    },

    // Creative Templates
    {
      id: "creative-designer",
      name: "Creative Designer",
      description: "Eye-catching design perfect for graphic designers and creative professionals",
      category: "creative",
      image: "https://s3u.tmimgcdn.com/u1573393/gJWHzoxWtf22pUkaS9ku.jpg",
      popular: true,
      ats: false,
      premium: false,
      rating: 4.9,
      downloads: "98K+",
      tags: ["Creative", "Design", "Artistic"],
    },
    {
      id: "portfolio-showcase",
      name: "Portfolio Showcase",
      description: "Visual template that highlights your creative portfolio and projects",
      category: "creative",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBk3U2AKJWXQPZDBYFdK1k6WvapbZXLSRIA&s",
      popular: true,
      ats: false,
      premium: true,
      rating: 4.8,
      downloads: "87K+",
      tags: ["Portfolio", "Visual", "Showcase"],
    },
    {
      id: "photographer-pro",
      name: "Photographer Pro",
      description: "Image-focused template perfect for photographers and visual artists",
      category: "creative",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXfE8PDDNDN_RJnlGx1yPDkjE7RMCYCt5aEg&s",
      popular: false,
      ats: false,
      premium: true,
      rating: 4.7,
      downloads: "52K+",
      tags: ["Photography", "Visual", "Art"],
    },
    {
      id: "ux-designer",
      name: "UX Designer",
      description: "User-centered template designed for UX/UI designers",
      category: "creative",
      image: "https://i.pinimg.com/736x/f4/46/7d/f4467ddc710bfdcd1ba92f99ee61c718.jpg",
      popular: true,
      ats: true,
      premium: false,
      rating: 4.9,
      downloads: "112K+",
      tags: ["UX", "UI", "Design"],
    },

    // Healthcare Templates
    {
      id: "medical-professional",
      name: "Medical Professional",
      description: "Clinical template designed for doctors and medical professionals",
      category: "healthcare",
      image: "https://images.template.net/395062/Medical-Resume-Template-edit-online.png",
      popular: true,
      ats: true,
      premium: false,
      rating: 4.8,
      downloads: "76K+",
      tags: ["Medical", "Clinical", "Healthcare"],
    },
    {
      id: "nurse-practitioner",
      name: "Nurse Practitioner",
      description: "Caring template perfect for nursing professionals",
      category: "healthcare",
      image: "https://cv2go.no/wp-content/uploads/2024/10/c4d07dfd-48f0-422c-b6c4-c58908fd8eeb-simple-healthcare-resume-pink-modern-simple-2-1.webp",
      popular: false,
      ats: true,
      premium: false,
      rating: 4.7,
      downloads: "64K+",
      tags: ["Nursing", "Care", "Medical"],
    },
    {
      id: "healthcare-admin",
      name: "Healthcare Admin",
      description: "Administrative template for healthcare management roles",
      category: "healthcare",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiZNj9UsjAwaDe8D4KdxQEEGquR6MEgYsm2Q&s",
      popular: false,
      ats: true,
      premium: true,
      rating: 4.6,
      downloads: "38K+",
      tags: ["Healthcare", "Admin", "Management"],
    },

    // Education Templates
    {
      id: "academic-scholar",
      name: "Academic Scholar",
      description: "Comprehensive template for academic and research positions",
      category: "education",
      image: "https://marketplace.canva.com/EAFk7wpbANE/1/0/1131w/canva-teacher-resume-in-beige-orange-elegant-simplicity-style-WPNGFrEMIFk.jpg",
      popular: false,
      ats: true,
      premium: false,
      rating: 4.7,
      downloads: "43K+",
      tags: ["Academic", "Research", "Scholar"],
    },
    {
      id: "teacher-educator",
      name: "Teacher Educator",
      description: "Educational template perfect for teachers and educators",
      category: "education",
      image: "https://www.resumebuilder.com/wp-content/uploads/2023/12/Senior-Level-Education-Resume-Example-Banner-Image.png",
      popular: true,
      ats: true,
      premium: false,
      rating: 4.8,
      downloads: "89K+",
      tags: ["Teaching", "Education", "Learning"],
    },
    {
      id: "student-graduate",
      name: "Student Graduate",
      description: "Entry-level template designed for recent graduates",
      category: "education",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-kifl7fWssttTvfYO11tLreCQKU_R7pmvw&s",
      popular: true,
      ats: true,
      premium: false,
      rating: 4.6,
      downloads: "156K+",
      tags: ["Student", "Graduate", "Entry Level"],
    },

    // Marketing Templates
    {
      id: "marketing-maven",
      name: "Marketing Maven",
      description: "Dynamic template for marketing professionals and brand managers",
      category: "marketing",
      image: "https://d25zcttzf44i59.cloudfront.net/marketing-assistant-resume-example.png",
      popular: true,
      ats: true,
      premium: false,
      rating: 4.8,
      downloads: "94K+",
      tags: ["Marketing", "Brand", "Strategy"],
    },
    {
      id: "social-media-pro",
      name: "Social Media Pro",
      description: "Trendy template for social media managers and digital marketers",
      category: "marketing",
      image: "https://cdn.enhancv.com/predefined-examples/8q8ki0ZcF6jVjO7mgTcasxy6p9dURMqA85b80I4x/image.png",
      popular: false,
      ats: true,
      premium: true,
      rating: 4.7,
      downloads: "67K+",
      tags: ["Social Media", "Digital", "Content"],
    },
    {
      id: "sales-champion",
      name: "Sales Champion",
      description: "Results-driven template for sales professionals and account managers",
      category: "marketing",
      image: "https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:cee1333a-b311-4187-ba8e-863b7bd3956f/component?assetType=TEMPLATE&etag=6a5676682061d3d773982d65c2a8cb4d&revision=0&component_id=7fe2575e-c548-429c-b5d9-704bb5d3f24d",
      popular: false,
      ats: true,
      premium: false,
      rating: 4.6,
      downloads: "72K+",
      tags: ["Sales", "Results", "Performance"],
    },
  ]

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const toggleFavorite = (templateId) => {
    setFavorites((prev) => (prev.includes(templateId) ? prev.filter((id) => id !== templateId) : [...prev, templateId]))
  }

  const featuredTemplates = templates.filter((t) => t.popular).slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            <Crown className="w-4 h-4 mr-1" />
            50+ Professional Templates
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              {" "}
              Resume Template
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Professionally designed, ATS-optimized templates trusted by over 2 million job seekers worldwide. Stand out
            from the crowd and land your dream job.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search templates by name, industry, or style..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white focus:text-gray-900 focus:placeholder:text-gray-500 transition-all"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Templates */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-yellow-500" />
            <h2 className="text-3xl font-bold text-gray-900">Featured Templates</h2>
            <Badge className="bg-yellow-100 text-yellow-700">Most Popular</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredTemplates.map((template) => (
              <Card
                key={template.id}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg"
              >
                <div className="relative">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {template.popular && (
                      <Badge className="bg-orange-500 hover:bg-orange-600 shadow-lg">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        Popular
                      </Badge>
                    )}
                    {template.premium && (
                      <Badge className="bg-purple-600 hover:bg-purple-700 shadow-lg">
                        <Crown className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                    {template.ats && (
                      <Badge variant="secondary" className="shadow-lg">
                        <Shield className="w-3 h-3 mr-1" />
                        ATS-Friendly
                      </Badge>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white"
                    onClick={() => toggleFavorite(template.id)}
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(template.id) ? "fill-red-500 text-red-500" : ""}`}
                    />
                  </Button>

                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <Button variant="secondary" size="sm" className="shadow-lg">
                        <Eye className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Link to={`/builder/${template.id}`}>
                        <Button size="sm" className="shadow-lg">
                          <Zap className="w-4 h-4 mr-2" />
                          Use Template
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {template.name}
                    </CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{template.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600 leading-relaxed">{template.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Download className="w-4 h-4" />
                      <span>{template.downloads} downloads</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {template.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/builder/${template.id}`} className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">Use This Template</Button>
                    </Link>
                    <Button variant="outline" size="icon" className="hover:bg-gray-100 bg-transparent">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7 bg-white shadow-sm">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {category.icon}
                <span className="hidden sm:inline">{category.name}</span>
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={template.image || "/placeholder.svg"}
                  alt={template.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {template.popular && (
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-xs">
                      <Star className="w-3 h-3 mr-1 fill-current" />
                      Popular
                    </Badge>
                  )}
                  {template.premium && (
                    <Badge className="bg-purple-600 hover:bg-purple-700 text-xs">
                      <Crown className="w-3 h-3 mr-1" />
                      Pro
                    </Badge>
                  )}
                </div>

                {/* ATS Badge */}
                {template.ats && (
                  <Badge variant="secondary" className="absolute top-3 right-3 text-xs">
                    ATS-OK
                  </Badge>
                )}

                {/* Favorite */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute bottom-3 right-3 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => toggleFavorite(template.id)}
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(template.id) ? "fill-red-500 text-red-500" : ""}`} />
                </Button>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button variant="secondary" size="sm">
                      <Eye className="w-4 h-4 mr-1" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{template.name}</CardTitle>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs">{template.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-sm line-clamp-2">{template.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    {template.downloads}
                  </span>
                  <div className="flex gap-1">
                    {template.tags.slice(0, 1).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link to={`/builder/${template.id}`}>
                  <Button className="w-full text-sm">Use Template</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No templates found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search terms or browse different categories.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-20 bg-gradient-to-r from-blue-600 to-purple-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't Decide? Start with Our Most Popular Template</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            The Modern Professional template has helped over 125,000 job seekers land their dream jobs. Perfect for any
            industry and completely customizable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/builder/modern-professional">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                <Zap className="w-5 h-5 mr-2" />
                Start with Modern Professional
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent px-8"
            >
              <Eye className="w-5 h-5 mr-2" />
              Preview All Templates
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
