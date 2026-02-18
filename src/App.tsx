import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Badge } from './components/ui/badge'
import { Alert, AlertDescription, AlertTitle } from './components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Switch } from './components/ui/switch'
import { Checkbox } from './components/ui/checkbox'
import { Progress } from './components/ui/progress'
import { Separator } from './components/ui/separator'
import { AlertCircle, Check, Rocket, Package, Code, Palette } from 'lucide-react'

function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            {/* Header */}
            <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <Rocket className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Spark Template
                                </h1>
                                <p className="text-sm text-slate-600 dark:text-slate-400">UI Component Showcase</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge>v0.0.0</Badge>
                            <Badge variant="secondary">React 19</Badge>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                {/* Hero Alert */}
                <Alert className="mb-8 border-blue-200 bg-blue-50 dark:bg-blue-950/20">
                    <AlertCircle className="h-4 w-4 text-blue-600" />
                    <AlertTitle className="text-blue-900 dark:text-blue-100">Welcome to Spark Template</AlertTitle>
                    <AlertDescription className="text-blue-800 dark:text-blue-200">
                        This showcase demonstrates the 45+ pre-built UI components available in this template. 
                        All components are accessible, customizable, and production-ready.
                    </AlertDescription>
                </Alert>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="border-2 hover:border-blue-300 transition-colors">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-3">
                                <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <CardTitle>45+ Components</CardTitle>
                            <CardDescription>
                                Pre-built UI components based on Radix UI primitives
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Progress value={100} className="mb-2" />
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Buttons, forms, dialogs, navigation, and more
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-purple-300 transition-colors">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-3">
                                <Code className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                            <CardTitle>TypeScript</CardTitle>
                            <CardDescription>
                                Fully typed with TypeScript for better DX
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Progress value={100} className="mb-2" />
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Type-safe development with IntelliSense
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-2 hover:border-green-300 transition-colors">
                        <CardHeader>
                            <div className="h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-3">
                                <Palette className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <CardTitle>Tailwind CSS</CardTitle>
                            <CardDescription>
                                Styled with Tailwind CSS utilities
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Progress value={100} className="mb-2" />
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                Fully customizable and themeable
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Tabs Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Component Examples</CardTitle>
                        <CardDescription>
                            Explore different component categories
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="buttons" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="buttons">Buttons</TabsTrigger>
                                <TabsTrigger value="forms">Forms</TabsTrigger>
                                <TabsTrigger value="feedback">Feedback</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="buttons" className="space-y-4 pt-4">
                                <div className="flex flex-wrap gap-3">
                                    <Button>Default</Button>
                                    <Button variant="secondary">Secondary</Button>
                                    <Button variant="destructive">Destructive</Button>
                                    <Button variant="outline">Outline</Button>
                                    <Button variant="ghost">Ghost</Button>
                                    <Button variant="link">Link</Button>
                                </div>
                                <Separator />
                                <div className="flex flex-wrap gap-3">
                                    <Button size="sm">Small</Button>
                                    <Button size="default">Default</Button>
                                    <Button size="lg">Large</Button>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="forms" className="space-y-4 pt-4">
                                <div className="grid w-full max-w-sm items-center gap-3">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input type="email" id="email" placeholder="email@example.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input type="password" id="password" placeholder="••••••••" />
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Checkbox id="terms" />
                                        <Label htmlFor="terms" className="text-sm font-normal">
                                            Accept terms and conditions
                                        </Label>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Switch id="notifications" />
                                        <Label htmlFor="notifications" className="text-sm font-normal">
                                            Enable notifications
                                        </Label>
                                    </div>
                                    <Button className="w-full">Submit</Button>
                                </div>
                            </TabsContent>
                            
                            <TabsContent value="feedback" className="space-y-4 pt-4">
                                <Alert>
                                    <Check className="h-4 w-4" />
                                    <AlertTitle>Success</AlertTitle>
                                    <AlertDescription>
                                        Your changes have been saved successfully.
                                    </AlertDescription>
                                </Alert>
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>
                                        Something went wrong. Please try again.
                                    </AlertDescription>
                                </Alert>
                                <div className="space-y-2">
                                    <Label>Loading Progress</Label>
                                    <Progress value={66} />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                {/* Accordion Section */}
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Documentation Quick Links</CardTitle>
                        <CardDescription>
                            Access comprehensive documentation for all aspects of the template
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Getting Started</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                        Quick setup guide to get your project running in minutes.
                                    </p>
                                    <Badge variant="outline">docs/GETTING_STARTED.md</Badge>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Components</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                        Complete reference for all 45+ UI components with usage examples.
                                    </p>
                                    <Badge variant="outline">docs/COMPONENTS.md</Badge>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Deployment</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                                        Deploy to Vercel, Netlify, GitHub Pages, and more platforms.
                                    </p>
                                    <Badge variant="outline">docs/DEPLOYMENT.md</Badge>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>

                {/* Footer Card */}
                <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2">
                    <CardHeader>
                        <CardTitle>Ready to Build?</CardTitle>
                        <CardDescription>
                            Start creating your application with these components
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">
                            This template includes everything you need: Vite, React 19, TypeScript, Tailwind CSS, 
                            and 45+ production-ready components. Check out the comprehensive documentation in the 
                            docs/ directory to learn more.
                        </p>
                    </CardContent>
                    <CardFooter className="flex gap-3">
                        <Button className="flex-1">
                            <Code className="mr-2 h-4 w-4" />
                            View Docs
                        </Button>
                        <Button variant="outline" className="flex-1">
                            <Package className="mr-2 h-4 w-4" />
                            Components
                        </Button>
                    </CardFooter>
                </Card>
            </main>

            {/* Footer */}
            <footer className="border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-12">
                <div className="container mx-auto px-4 py-6 text-center text-sm text-slate-600 dark:text-slate-400">
                    <p>Spark Template • Built with React, TypeScript, and Tailwind CSS</p>
                </div>
            </footer>
        </div>
    )
}

export default App