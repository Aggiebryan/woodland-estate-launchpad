
import { Shield, ShieldCheck, UserCheck, HeartHandshake, FileText, ArrowRight } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Guardianship = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <UserCheck className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Guardianship in Texas
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Safeguarding Minors and Incapacitated Loved Ones Through Legal Protection
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="https://woodlandslaw.cliogrow.com/book" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-woodlands-gold text-woodlands-purple px-6 py-3 rounded-md font-medium hover:bg-woodlands-lightgold transition-colors"
              >
                Book a Consultation
              </a>
              <a 
                href="tel:8326260116" 
                className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors"
              >
                Call (832) 626-0116
              </a>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto bg-white/5 p-8 rounded-lg">
            <p className="text-woodlands-cream text-lg mb-6">
              Planning for the future means preparing for the unexpected. <strong>Guardianship</strong> is a legal tool that protects those who cannot care for themselves – whether it's your minor children or an adult family member with disabilities. At <strong>The Woodlands Law Firm</strong>, based in The Woodlands just north of Houston, we help seniors, parents, high-net-worth individuals, and business owners secure peace of mind through effective guardianship planning.
            </p>
            <p className="text-woodlands-cream text-lg">
              Our compassionate team is ready to guide you through Texas guardianship laws so your loved ones are cared for if something happens to you.
            </p>
          </div>
          
          {/* What Is Guardianship Section */}
          <section className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-8 w-8 text-woodlands-gold" />
              <h2 className="text-3xl font-serif text-woodlands-gold">What Is Guardianship?</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg text-woodlands-cream">
              <p className="mb-6">
                A <strong>guardianship</strong> in Texas is a court-supervised arrangement where a <strong>guardian</strong> is appointed to make decisions for a person (the <strong>ward</strong>) who is unable to make decisions for themselves. This legal relationship empowers the guardian to manage the personal care and/or finances of the ward in the ward's best interest.
              </p>
              <p className="mb-6">
                Guardianships are established for two main groups: <strong>minors</strong> (children under 18) and <strong>incapacitated adults</strong> (including adults with disabilities or seniors with conditions like dementia). In all cases, a Texas probate court must approve the guardianship and will oversee the guardian's actions to protect the ward's welfare.
              </p>
              
              <h3 className="text-xl text-woodlands-gold font-serif mt-8 mb-4">Types of Guardianship</h3>
              <p className="mb-4">Texas law recognizes different types and scopes of guardianships to fit the situation:</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-woodlands-purple/80 border border-woodlands-gold/20">
                  <CardHeader>
                    <CardTitle className="text-woodlands-gold">Guardian of the Person</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-woodlands-cream">
                      Manages the ward's personal well-being, including decisions about living arrangements, medical care, education, and daily needs.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-woodlands-purple/80 border border-woodlands-gold/20">
                  <CardHeader>
                    <CardTitle className="text-woodlands-gold">Guardian of the Estate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-woodlands-cream">
                      Manages the ward's finances and property, handling tasks like paying bills, managing assets, and making financial decisions.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-woodlands-purple/80 border border-woodlands-gold/20">
                  <CardHeader>
                    <CardTitle className="text-woodlands-gold">Temporary Guardianship</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-woodlands-cream">
                      A short-term guardianship for emergencies or interim needs, usually limited to up to 60 days in Texas.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-woodlands-purple/80 border border-woodlands-gold/20">
                  <CardHeader>
                    <CardTitle className="text-woodlands-gold">Permanent Guardianship</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-woodlands-cream">
                      A long-term guardianship, lasting until the ward regains capacity, reaches adulthood (for minors), or passes away.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <p className="mt-6">
                Texas courts can also tailor a guardianship to be <strong>limited or full</strong>. A limited guardianship gives the guardian authority over only certain areas of the ward's life, preserving as much independence for the ward as possible. In every case, the court's priority is to impose the least restrictive solution that still protects the individual in need.
              </p>
            </div>
          </section>
          
          {/* Guardianship for Minor Children */}
          <section className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="h-8 w-8 text-woodlands-gold" />
              <h2 className="text-3xl font-serif text-woodlands-gold">Guardianship for Minor Children</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg text-woodlands-cream">
              <p className="mb-6">
                If you have young children, one of the most important steps in your estate plan is addressing guardianship. <strong>Guardianship for minors</strong> ensures that if you become incapacitated or pass away, your children will be cared for by a trusted adult of your choosing.
              </p>
              
              <p className="mb-6">
                In Texas, parents can <strong>nominate a guardian for their minor children in a will</strong>, and this nomination is highly influential in the court's decision. By naming a guardian, you get to <strong>designate who will assume responsibility for your children's upbringing</strong> – including their financial, educational, and medical needs – rather than leaving that decision to a judge.
              </p>
              
              <h3 className="text-xl text-woodlands-gold font-serif mt-8 mb-4">When is a guardian needed for a child?</h3>
              <p className="mb-4">A guardian is typically needed when no parent is able to care for the child. Common situations include:</p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Both parents are deceased or missing.</strong> If a tragedy leaves a child without living parents, a guardian must be appointed to raise the child.</li>
                <li><strong>Both parents are incapacitated.</strong> For example, if parents are in a serious accident or suffer an illness that renders them unable to care for the child.</li>
                <li><strong>Single parent scenario.</strong> If one parent is already out of the picture and the remaining parent becomes incapacitated or dies.</li>
                <li><strong>Minor inherits money or assets.</strong> Even if a child has a surviving parent caring for them, a guardian of the estate might be appointed if the child inherits significant assets.</li>
              </ul>
              
              <div className="bg-woodlands-darkpurple/30 p-5 rounded-md mt-6">
                <h4 className="text-woodlands-lightgold text-lg mb-2">Planning Tip</h4>
                <p>
                  It's crucial to <strong>name a preferred guardian in your will</strong> so that your wishes are known to the court. This can prevent family disputes and avoid having the court appoint someone you wouldn't have chosen. Consider naming an alternate guardian in case your first choice cannot serve.
                </p>
              </div>
              
              <div className="bg-woodlands-darkpurple/20 p-5 rounded-md mt-6 border-l-4 border-woodlands-gold">
                <h4 className="text-woodlands-lightgold text-lg mb-2">Example</h4>
                <p>
                  <strong>John and Maria</strong>, parents of two young kids in The Woodlands, list Maria's sister as the guardian of their children in their wills. If an accident incapacitates John and Maria, Maria's sister can step in immediately to care for the kids. Because she's named in the will, the court process to appoint her is smoother and faster, providing stability for the children during a difficult time.
                </p>
              </div>
            </div>
          </section>
          
          {/* Guardianship for Adults */}
          <section className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center gap-3 mb-6">
              <HeartHandshake className="h-8 w-8 text-woodlands-gold" />
              <h2 className="text-3xl font-serif text-woodlands-gold">Guardianship for Incapacitated Adults</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg text-woodlands-cream">
              <p className="mb-6">
                Guardianship is not only for children. It's often essential for <strong>adults who cannot manage their own affairs</strong> due to disability, injury, or illness. Texas law allows guardianships for incapacitated adults to ensure they have someone to make necessary decisions on their behalf.
              </p>
              
              <h3 className="text-xl text-woodlands-gold font-serif mt-6 mb-4">Adult children with special needs</h3>
              <p className="mb-6">
                When a child with a developmental disability approaches age 18, parents often face a hard reality – once the child becomes a legal adult, the parents <strong>no longer have automatic authority</strong> to make medical, educational, or financial decisions for them. If the adult child lacks the capacity to make decisions, parents may need to establish a guardianship to continue caring for them.
              </p>
              
              <h3 className="text-xl text-woodlands-gold font-serif mt-6 mb-4">Incapacitated seniors or adults</h3>
              <p className="mb-6">
                If an adult becomes incapacitated – for example, through a traumatic brain injury, stroke, or age-related conditions like dementia or Alzheimer's – a guardianship may be necessary to protect them. <strong>Guardianship for an elderly parent</strong> or spouse can ensure that someone trustworthy can make decisions about the person's medical care, housing, and financial affairs.
              </p>
              
              <h3 className="text-xl text-woodlands-gold font-serif mt-6 mb-4">Why not a Power of Attorney?</h3>
              <p className="mb-6">
                Ideally, adults should sign powers of attorney and other advance directives <em>before</em> they become incapacitated. However, if no valid power of attorney or directive exists, or if the agent is unavailable or abusing their authority, a guardianship is the <strong>backup legal solution</strong>.
              </p>
              
              <div className="bg-woodlands-darkpurple/30 p-5 rounded-md mt-6">
                <h4 className="text-woodlands-lightgold text-lg mb-2">Guardianship vs. other tools</h4>
                <p>
                  In some cases, establishing a trust or using a financial advisor can manage an incapacitated person's assets without full guardianship. Texas also recognizes <strong>supported decision-making</strong> agreements for certain adults with disabilities as a less restrictive option. Our attorneys will help you explore these alternatives if appropriate.
                </p>
              </div>
            </div>
          </section>
          
          {/* When Is Guardianship Necessary */}
          <section className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-8 w-8 text-woodlands-gold" />
              <h2 className="text-3xl font-serif text-woodlands-gold">When Is Guardianship Necessary?</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg text-woodlands-cream">
              <p className="mb-6">
                Deciding to seek a guardianship is a serious step. <strong>Guardianship is necessary when an individual (child or adult) lacks capacity and no less-restrictive alternative is available to meet their needs.</strong>
              </p>
              
              <p className="mb-4">You may need to pursue guardianship in situations such as:</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-woodlands-purple/80 border border-woodlands-gold/20 p-4 rounded-lg">
                  <h4 className="text-woodlands-gold font-medium mb-2">A minor with no capable parents</h4>
                  <p className="text-sm">When a child is left without a parent who can care for them, a guardian must be appointed.</p>
                </div>
                
                <div className="bg-woodlands-purple/80 border border-woodlands-gold/20 p-4 rounded-lg">
                  <h4 className="text-woodlands-gold font-medium mb-2">A disabled young adult</h4>
                  <p className="text-sm">If your 18-year-old cannot make informed decisions due to a developmental disability.</p>
                </div>
                
                <div className="bg-woodlands-purple/80 border border-woodlands-gold/20 p-4 rounded-lg">
                  <h4 className="text-woodlands-gold font-medium mb-2">An elderly family member</h4>
                  <p className="text-sm">Perhaps an aging parent is showing signs of advanced Alzheimer's and is no longer safe to live alone or manage money.</p>
                </div>
                
                <div className="bg-woodlands-purple/80 border border-woodlands-gold/20 p-4 rounded-lg">
                  <h4 className="text-woodlands-gold font-medium mb-2">An incapacitated adult</h4>
                  <p className="text-sm">If a catastrophic injury or serious illness leaves an adult unable to communicate or make decisions.</p>
                </div>
              </div>
              
              <p>
                In each case, the key question is: <em>Can this person adequately care for themselves or their property?</em> If not, and if no agent or legal arrangement is already in place to assist them, a guardianship is likely necessary to avoid risks of neglect, abuse, or mismanagement.
              </p>
            </div>
          </section>
          
          {/* Texas Guardianship Process */}
          <section className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-woodlands-gold" />
              <h2 className="text-3xl font-serif text-woodlands-gold">The Texas Guardianship Process</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg text-woodlands-cream">
              <p className="mb-6">
                Establishing a guardianship in Texas involves several legal steps and strict oversight by the court. The process can be complex, but our firm will handle the details and guide you through each stage.
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="step1" className="border-woodlands-gold/30">
                  <AccordionTrigger className="text-woodlands-gold">1. Filing an Application</AccordionTrigger>
                  <AccordionContent className="text-woodlands-cream">
                    The process begins by filing a guardianship application in the appropriate probate court (usually in the county where the ward resides). The applicant must provide information about the ward's condition and why a guardian is needed.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="step2" className="border-woodlands-gold/30">
                  <AccordionTrigger className="text-woodlands-gold">2. Notices and Investigation</AccordionTrigger>
                  <AccordionContent className="text-woodlands-cream">
                    Once filed, the court ensures that all interested persons are notified. The ward themselves must also be personally served with notice. The court will appoint an <strong>attorney ad litem</strong> to represent the ward's interests.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="step3" className="border-woodlands-gold/30">
                  <AccordionTrigger className="text-woodlands-gold">3. Doctor's Evaluation</AccordionTrigger>
                  <AccordionContent className="text-woodlands-cream">
                    For adult incapacity cases, Texas law usually requires a letter or certificate from a physician describing the ward's ability to care for themselves. This medical evidence is crucial to prove incapacity.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="step4" className="border-woodlands-gold/30">
                  <AccordionTrigger className="text-woodlands-gold">4. Court Hearing</AccordionTrigger>
                  <AccordionContent className="text-woodlands-cream">
                    A guardianship hearing is set, where the applicant presents evidence of the need for guardianship. The proposed guardian's qualifications and fitness are also considered. The ward has the right to attend and contest.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="step5" className="border-woodlands-gold/30">
                  <AccordionTrigger className="text-woodlands-gold">5. Court Decision and Appointment</AccordionTrigger>
                  <AccordionContent className="text-woodlands-cream">
                    If the judge approves the guardianship, an order is signed outlining the guardian's powers. The guardian must take an oath and often must post a <strong>bond</strong>. Once that's done, the court clerk issues <strong>Letters of Guardianship</strong>.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="step6" className="border-woodlands-gold/30">
                  <AccordionTrigger className="text-woodlands-gold">6. Ongoing Oversight</AccordionTrigger>
                  <AccordionContent className="text-woodlands-cream">
                    Getting the guardianship established is not the end – Texas courts maintain oversight for the duration. Guardians must file regular reports. For a guardian of the person, this means an <strong>Annual Report</strong> on the ward's well-being. For a guardian of the estate, detailed <strong>Annual Accountings</strong> of finances are required.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="bg-woodlands-darkpurple/30 p-5 rounded-md mt-6">
                <p>
                  Because of these procedural requirements, it's <strong>crucial to have a knowledgeable attorney</strong> assist you. Our attorneys will prepare the necessary paperwork, guide you on gathering supporting evidence, and advocate for you and your loved one in court.
                </p>
              </div>
            </div>
          </section>
          
          {/* Estate Planning Section */}
          <section className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-woodlands-gold" />
              <h2 className="text-3xl font-serif text-woodlands-gold">Naming Guardians in Your Estate Plan</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg text-woodlands-cream">
              <p className="mb-6">
                Guardianship issues are closely tied to <strong>estate planning</strong>. A thoughtful estate plan will not only distribute your assets but also ensure your loved ones are cared for by the people you trust.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-woodlands-gold/20 rounded-lg p-4">
                  <h3 className="text-lg text-woodlands-gold mb-3">Last Will and Testament</h3>
                  <p className="text-sm">
                    In your will, you should <strong>nominate a guardian for your minor children</strong>. Upon your death, this nomination lets the probate judge know your wishes.
                  </p>
                </div>
                
                <div className="border border-woodlands-gold/20 rounded-lg p-4">
                  <h3 className="text-lg text-woodlands-gold mb-3">Guardians for Special Needs</h3>
                  <p className="text-sm">
                    If you have an adult child with a disability, consider who would act as guardian when you are no longer able. You might also establish a <strong>special needs trust</strong>.
                  </p>
                </div>
                
                <div className="border border-woodlands-gold/20 rounded-lg p-4">
                  <h3 className="text-lg text-woodlands-gold mb-3">Powers of Attorney</h3>
                  <p className="text-sm">
                    For your <strong>own</strong> potential incapacity, you can sign durable powers of attorney (financial and medical) to appoint agents to act for you.
                  </p>
                </div>
                
                <div className="border border-woodlands-gold/20 rounded-lg p-4">
                  <h3 className="text-lg text-woodlands-gold mb-3">Letters of Instruction</h3>
                  <p className="text-sm">
                    Consider writing a letter of instruction for your family outlining things like your children's routines, medical needs, schooling, or your disabled loved one's care preferences.
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <p>
                  Including guardianship provisions in your estate plan is an act of love – it means you're looking out for your family's well-being from every angle. Our estate planning services always cover guardianship planning for those who need it.
                </p>
                <div className="mt-6">
                  <Link to="/wills-and-trusts" className="text-woodlands-gold hover:text-woodlands-lightgold transition-colors flex items-center">
                    Learn more about our estate planning services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          
          {/* Choosing the Right Guardian */}
          <section className="max-w-4xl mx-auto mt-16">
            <div className="flex items-center gap-3 mb-6">
              <UserCheck className="h-8 w-8 text-woodlands-gold" />
              <h2 className="text-3xl font-serif text-woodlands-gold">Choosing the Right Guardian</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg text-woodlands-cream">
              <p className="mb-6">
                <strong>Choosing the right guardian</strong> is often one of the hardest decisions for parents and caregivers. It's normal to have concerns about this choice and about how the court gets involved.
              </p>
              
              <h3 className="text-xl text-woodlands-gold font-serif mt-6 mb-4">Factors to Consider in a Guardian</h3>
              <p className="mb-4">
                Look for someone who is responsible, trustworthy, and capable of providing a stable, loving environment for your loved one. Common factors to weigh include:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li><strong>Relationship and Values:</strong> Is this person already close to your child or the incapacitated adult? Do they share your values?</li>
                <li><strong>Ability and Willingness:</strong> Consider the person's age, health, and life situation. Are they physically and emotionally able to take on the care?</li>
                <li><strong>Location and Stability:</strong> Geographical proximity can matter – someone nearby may cause less disruption, especially for a child's schooling.</li>
                <li><strong>Financial sense:</strong> If the guardian will manage finances, are they financially responsible and organized?</li>
                <li><strong>Trustworthiness:</strong> Above all, the guardian should be someone you trust deeply.</li>
              </ul>
              
              <div className="bg-woodlands-darkpurple/30 p-5 rounded-md mt-6">
                <h4 className="text-woodlands-lightgold text-lg mb-2">Peace of Mind</h4>
                <p>
                  Choosing a guardian and completing the legal steps gives you peace of mind. You can live your life knowing that, should anything happen, your children or dependent loved ones will be in good hands.
                </p>
              </div>
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="max-w-4xl mx-auto mt-16">
            <ConsultationCTA 
              title="Protect Your Loved Ones"
              subtitle="Get trusted guidance on guardianship from The Woodlands Law Firm. Contact us today for a free consultation."
              variant="dark"
            />
          </section>
          
          {/* Contact Form Section */}
          <section className="max-w-4xl mx-auto mt-16 mb-16">
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-3xl font-serif text-woodlands-gold">Contact Us About Guardianship</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-woodlands-cream">
                  <h3 className="text-xl font-serif text-woodlands-gold mb-4">Ready to ensure your family's future is secure?</h3>
                  <p className="mb-6">
                    Guardianship is a powerful tool to protect those who matter most – but it must be done right. With so much at stake, trust <strong>The Woodlands Law Firm</strong> to provide knowledgeable and caring guidance every step of the way.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Button asChild variant="link" className="text-woodlands-lightgold p-0 h-auto">
                        <a href="https://woodlandslaw.cliogrow.com/book" target="_blank" rel="noopener noreferrer">
                          <Calendar className="h-5 w-5" />
                          <span>Schedule a Consultation</span>
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button asChild variant="link" className="text-woodlands-lightgold p-0 h-auto">
                        <a href="tel:8326260116">
                          <ArrowRight className="h-5 w-5" />
                          <span>Call (832) 626-0116</span>
                        </a>
                      </Button>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button asChild variant="link" className="text-woodlands-lightgold p-0 h-auto">
                        <a href="mailto:admin@woodlands.law">
                          <ArrowRight className="h-5 w-5" />
                          <span>Email admin@woodlands.law</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-woodlands-gold mb-2">Your Name (required)</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-md bg-woodlands-purple border border-woodlands-gold/30 text-woodlands-cream"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-woodlands-gold mb-2">Your Email (required)</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-md bg-woodlands-purple border border-woodlands-gold/30 text-woodlands-cream"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-woodlands-gold mb-2">Phone Number (optional)</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 rounded-md bg-woodlands-purple border border-woodlands-gold/30 text-woodlands-cream"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-woodlands-gold mb-2">How Can We Help?</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-md bg-woodlands-purple border border-woodlands-gold/30 text-woodlands-cream"
                        placeholder="Brief description of your guardianship or estate planning needs"
                      ></textarea>
                    </div>
                    <div>
                      <Button type="submit" className="bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold w-full">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
};

export default Guardianship;
