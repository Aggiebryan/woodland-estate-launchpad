
import { UserCheck, BookOpen, Shield, UserPlus } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Link } from "react-router-dom";

const Guardianship = () => {
  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <UserCheck className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Guardianship in Texas
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Safeguarding Minors and Incapacitated Loved Ones with Compassionate Legal Guidance
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 p-8 rounded-lg mb-12">
              <p className="text-woodlands-cream text-lg mb-6">
                Planning for the future means preparing for the unexpected. <strong>Guardianship</strong> is a legal tool that protects those who cannot care for themselves – whether it's your minor children or an adult family member with disabilities. At <strong>The Woodlands Law Firm</strong>, based in The Woodlands just north of Houston, we help seniors, parents, high-net-worth individuals, and business owners secure peace of mind through effective guardianship planning.
              </p>
              <p className="text-woodlands-cream text-lg mb-6">
                Our compassionate team is ready to guide you through Texas guardianship laws so your loved ones are cared for if something happens to you.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
                <a 
                  href="tel:8326260116" 
                  className="bg-woodlands-gold hover:bg-woodlands-lightgold text-woodlands-purple px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
                >
                  <BookOpen size={20} /> Call (832) 626-0116
                </a>
                <a 
                  href="https://woodlandslaw.cliogrow.com/book" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white hover:bg-woodlands-cream text-woodlands-purple px-6 py-3 rounded-md font-medium transition-colors flex items-center gap-2"
                >
                  <Shield size={20} /> Book a Consultation
                </a>
                <a 
                  href="mailto:admin@woodlands.law" 
                  className="bg-woodlands-darkpurple hover:bg-woodlands-purple text-woodlands-gold px-6 py-3 rounded-md font-medium transition-colors border border-woodlands-gold flex items-center gap-2"
                >
                  <UserPlus size={20} /> Email Us
                </a>
              </div>
            </div>
            
            {/* What Is Guardianship */}
            <section className="bg-white/5 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                What Is Guardianship?
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  A <strong>guardianship</strong> in Texas is a court-supervised arrangement where a <strong>guardian</strong> is appointed to make decisions for a person (the <strong>ward</strong>) who is unable to make decisions for themselves. This legal relationship empowers the guardian to manage the personal care and/or finances of the ward in the ward's best interest. Guardianships are established for two main groups: <strong>minors</strong> (children under 18) and <strong>incapacitated adults</strong> (including adults with disabilities or seniors with conditions like dementia). In all cases, a Texas probate court must approve the guardianship and will oversee the guardian's actions to protect the ward's welfare.
                </p>
              </div>
              
              <h3 className="text-2xl font-serif text-woodlands-gold mt-8 mb-4">
                Types of Guardianship
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-xl text-woodlands-gold mb-3">Guardian of the Person</h4>
                  <p className="text-woodlands-cream">
                    Manages the ward's personal well-being, including decisions about living arrangements, medical care, education, and daily needs.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-xl text-woodlands-gold mb-3">Guardian of the Estate</h4>
                  <p className="text-woodlands-cream">
                    Manages the ward's finances and property, handling tasks like paying bills, managing assets, and making financial decisions on the ward's behalf.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-xl text-woodlands-gold mb-3">Temporary Guardianship</h4>
                  <p className="text-woodlands-cream">
                    A short-term guardianship for emergencies or interim needs, usually limited to 60 days in Texas.
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-lg">
                  <h4 className="text-xl text-woodlands-gold mb-3">Permanent Guardianship</h4>
                  <p className="text-woodlands-cream">
                    A long-term solution lasting until the ward regains capacity, reaches adulthood, or passes away.
                  </p>
                </div>
              </div>
              
              <p className="text-woodlands-cream mt-6">
                Texas courts can tailor a guardianship to be <strong>limited or full</strong>. A limited guardianship gives the guardian authority over only certain areas of the ward's life, preserving as much independence for the ward as possible. In every case, the court's priority is to impose the least restrictive solution that still protects the individual in need.
              </p>
            </section>
            
            {/* Guardianship for Minor Children */}
            <section className="bg-white/5 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Guardianship for Minor Children
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  If you have young children, one of the most important steps in your estate plan is addressing guardianship. <strong>Guardianship for minors</strong> ensures that if you become incapacitated or pass away, your children will be cared for by a trusted adult of your choosing. In Texas, parents can <strong>nominate a guardian for their minor children in a will</strong>, and this nomination is highly influential in the court's decision.
                </p>
                
                <h3 className="text-2xl font-serif text-woodlands-gold mt-6 mb-4">
                  When is a guardian needed for a child?
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Both parents are deceased or missing.</strong> If a tragedy leaves a child without living parents, a guardian must be appointed to raise the child.</li>
                  <li><strong>Both parents are incapacitated.</strong> If parents are in a serious accident or illness that renders them unable to care for the child.</li>
                  <li><strong>Single parent scenario.</strong> If one parent is already out of the picture and the remaining parent becomes incapacitated or dies.</li>
                  <li><strong>Minor inherits money or assets.</strong> A guardian of the estate might be appointed if the child inherits significant assets.</li>
                </ul>
                
                <div className="bg-woodlands-darkpurple/50 p-6 rounded-lg mt-6 border-l-4 border-woodlands-gold">
                  <h4 className="text-xl text-woodlands-gold mb-3">Planning Tip</h4>
                  <p className="text-woodlands-cream">
                    It's crucial to <strong>name a preferred guardian in your will</strong> so that your wishes are known to the court. This can prevent family disputes and avoid having the court appoint someone you wouldn't have chosen.
                  </p>
                </div>
                
                <div className="mt-6 italic">
                  <p className="text-woodlands-cream">
                    <strong>Example:</strong> John and Maria, parents of two young kids in The Woodlands, list Maria's sister as the guardian of their children in their wills. If an accident incapacitates both parents, Maria's sister can step in immediately to care for the kids. Because she's named in the will, the court process to appoint her is smoother and faster.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Guardianship for Incapacitated Adults */}
            <section className="bg-white/5 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Guardianship for Incapacitated Adults and Adults with Disabilities
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  Guardianship is not only for children. It's often essential for <strong>adults who cannot manage their own affairs</strong> due to disability, injury, or illness. Texas law allows guardianships for incapacitated adults to ensure they have someone to make necessary decisions on their behalf.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Adult Children with Special Needs</h3>
                    <p>
                      When a child with a developmental disability turns 18, parents no longer have automatic authority to make decisions for them. Establishing a guardianship ensures that personal and financial needs are met throughout the child's adult life.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Incapacitated Seniors or Adults</h3>
                    <p>
                      If an adult becomes incapacitated through injury, stroke, or conditions like dementia, a guardianship ensures someone trustworthy can make decisions about medical care, housing, and finances.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif text-woodlands-gold mt-8 mb-4">
                  Why not a Power of Attorney?
                </h3>
                <p>
                  Ideally, adults should sign powers of attorney before becoming incapacitated. However, if no valid power of attorney exists, or if the agent is unavailable or abusing their authority, guardianship is the <strong>backup legal solution</strong>. Unlike a power of attorney, guardianship requires court approval and oversight, but grants clear, legally enforceable authority.
                </p>
              </div>
            </section>
            
            {/* When Is Guardianship Necessary */}
            <section className="bg-white/5 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                When Is Guardianship Necessary?
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  Deciding to seek a guardianship is a serious step. <strong>Guardianship is necessary when an individual lacks capacity and no less-restrictive alternative is available.</strong> You may need to pursue guardianship in situations such as:
                </p>
                
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li><strong>A minor with no capable parents:</strong> When a child is left without a parent who can care for them.</li>
                  <li><strong>A developmentally disabled teenager becoming an adult:</strong> If your 18-year-old cannot make informed decisions due to a developmental disability.</li>
                  <li><strong>An elderly family member losing capacity:</strong> Perhaps an aging parent is showing signs of advanced Alzheimer's and is no longer safe to live alone.</li>
                  <li><strong>An adult incapacitated by accident or illness:</strong> If a catastrophic injury or illness leaves an adult unable to communicate or make decisions.</li>
                  <li><strong>Minor or adult who receives a settlement or inheritance:</strong> When a court requires oversight of funds awarded to a minor or incapacitated adult.</li>
                </ul>
                
                <p className="mt-4">
                  The key question is: <em>Can this person adequately care for themselves or their property?</em> If not, and if no agent or legal arrangement is already in place to assist them, a guardianship may be necessary to avoid risks of neglect, abuse, or mismanagement.
                </p>
              </div>
            </section>
            
            {/* Mid-page CTA */}
            <div className="my-12">
              <ConsultationCTA 
                title="Protect Your Loved Ones"
                subtitle="Schedule a consultation to discuss your family's guardianship needs with our experienced attorneys."
                variant="dark"
              />
            </div>
            
            {/* The Texas Guardianship Process */}
            <section className="bg-white/5 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                The Texas Guardianship Process
              </h2>
              <div className="space-y-6 text-woodlands-cream font-body">
                <p>
                  Establishing a guardianship in Texas involves several legal steps and strict oversight by the court. The process can be complex, but our firm will handle the details and guide you through each stage.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-white/5 p-6 rounded-lg border-l-4 border-woodlands-gold">
                    <h3 className="text-xl text-woodlands-gold mb-2">1. Filing an Application</h3>
                    <p>
                      The process begins by filing a guardianship application in the appropriate probate court. The applicant must provide information about the ward's condition and why a guardian is needed.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border-l-4 border-woodlands-gold">
                    <h3 className="text-xl text-woodlands-gold mb-2">2. Notices and Investigation</h3>
                    <p>
                      Once filed, the court ensures that all interested persons are notified. The court will appoint an attorney ad litem to represent the ward's interests.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border-l-4 border-woodlands-gold">
                    <h3 className="text-xl text-woodlands-gold mb-2">3. Doctor's Evaluation</h3>
                    <p>
                      For adult incapacity cases, Texas law usually requires a certificate from a physician describing the ward's ability to care for themselves.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border-l-4 border-woodlands-gold">
                    <h3 className="text-xl text-woodlands-gold mb-2">4. Court Hearing</h3>
                    <p>
                      A guardianship hearing is set, where evidence is presented about the need for guardianship. The ward has the right to attend and contest if able.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border-l-4 border-woodlands-gold">
                    <h3 className="text-xl text-woodlands-gold mb-2">5. Court Decision and Appointment</h3>
                    <p>
                      If approved, the judge signs an order outlining the guardian's powers. The guardian takes an oath and often posts a bond. The court issues Letters of Guardianship.
                    </p>
                  </div>
                  
                  <div className="bg-white/5 p-6 rounded-lg border-l-4 border-woodlands-gold">
                    <h3 className="text-xl text-woodlands-gold mb-2">6. Ongoing Oversight</h3>
                    <p>
                      Guardians must file regular reports. For a guardian of the person, this means an Annual Report on the ward's well-being. For a guardian of the estate, detailed Annual Accountings are required.
                    </p>
                  </div>
                </div>
                
                <p className="mt-6">
                  Because of these procedural requirements, it's <strong>crucial to have a knowledgeable attorney</strong> assist you. Our attorneys will prepare the necessary paperwork, gather supporting evidence, and advocate for you in court.
                </p>
              </div>
            </section>
            
            {/* Naming Guardians in Your Estate Plan */}
            <section className="bg-white/5 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Naming Guardians in Your Estate Plan
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  Guardianship issues are closely tied to <strong>estate planning</strong>. A thoughtful estate plan will not only distribute your assets but also ensure your loved ones are cared for by the people you trust.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Last Will and Testament</h3>
                    <p>
                      In your will, you should nominate a guardian for your minor children. Upon your death, this nomination lets the probate judge know your wishes.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Guardians for Special Needs</h3>
                    <p>
                      Consider who would act as guardian for an adult child with a disability when you are no longer able. A special needs trust can work alongside a guardianship.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Temporary Guardian Designations</h3>
                    <p>
                      Prepare a document to designate who should care for your children immediately if you become incapacitated, before a court formally appoints a guardian.
                    </p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Powers of Attorney and Medical Directives</h3>
                    <p>
                      For your own potential incapacity, sign durable powers of attorney to appoint agents to act for you, potentially preventing the need for a court-appointed guardian.
                    </p>
                  </div>
                </div>
                
                <p className="mt-6">
                  Including guardianship provisions in your estate plan is an act of love – it means you're looking out for your family's well-being from every angle. Our estate planning services always cover guardianship planning for those who need it.
                </p>
              </div>
            </section>
            
            {/* Choosing the Right Guardian */}
            <section className="bg-white/5 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Choosing the Right Guardian
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  Choosing the right guardian is often one of the hardest decisions for parents and caregivers. Here are some considerations to help you make this decision:
                </p>
                
                <h3 className="text-2xl font-serif text-woodlands-gold mt-8 mb-4">
                  Factors to Consider in a Guardian
                </h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Relationship and Values:</strong> Is this person already close to your child? Do they share your values and outlook on life?</li>
                  <li><strong>Ability and Willingness:</strong> Are they physically and emotionally able to take on the care of your loved one? Have you confirmed they are willing to serve?</li>
                  <li><strong>Location and Stability:</strong> Consider geographical proximity and their home environment.</li>
                  <li><strong>Financial sense:</strong> For estate guardians, are they financially responsible and organized?</li>
                  <li><strong>Trustworthiness:</strong> Above all, the guardian should be someone you trust deeply.</li>
                </ul>
                
                <div className="bg-woodlands-darkpurple/50 p-6 rounded-lg mt-6">
                  <h3 className="text-xl text-woodlands-gold mb-3">Peace of Mind</h3>
                  <p>
                    Choosing a guardian and completing the legal steps gives you peace of mind. You can live life knowing that, should anything happen, your children or dependent loved ones will be in good hands. It's a difficult decision, but once made, you'll feel a weight lifted off your shoulders.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Call to Action */}
            <section className="bg-white/5 p-8 rounded-lg mb-12">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6 text-center">
                Protect Your Loved Ones: Get Trusted Guidance on Guardianship
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body text-center">
                <p>
                  Guardianship is a powerful tool to protect those who matter most – but it must be done right. With so much at stake, trust <strong>The Woodlands Law Firm</strong> to provide knowledgeable and caring guidance every step of the way.
                </p>
                <p>
                  We have over a decade of experience in Texas <strong>probate, estate planning, and guardianship law</strong>, and we're committed to treating your family as our own.
                </p>
                
                <h3 className="text-2xl font-serif text-woodlands-gold mt-8 mb-6">
                  Ready to ensure your family's future is secure?
                </h3>
                
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
                  <a 
                    href="https://woodlandslaw.cliogrow.com/book" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-woodlands-gold hover:bg-woodlands-lightgold text-woodlands-purple px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Schedule a Consultation
                  </a>
                  <a 
                    href="tel:8326260116" 
                    className="bg-white hover:bg-woodlands-cream text-woodlands-purple px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    Call (832) 626-0116
                  </a>
                  <a 
                    href="mailto:admin@woodlands.law" 
                    className="bg-woodlands-darkpurple hover:bg-woodlands-purple text-woodlands-gold px-6 py-3 rounded-md font-medium transition-colors border border-woodlands-gold"
                  >
                    Email Us
                  </a>
                </div>
                
                <p className="mt-8">
                  Protecting your children, parents, or other loved ones is not something to put off. <strong>Guardianship law in Texas</strong> can be complex, but with the right help, you can navigate it successfully and achieve the peace of mind you deserve.
                </p>
              </div>
            </section>

          </div>

          {/* Final Call to Action */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Start Your Guardianship Plan Today"
              subtitle="Our experienced attorneys are ready to help you protect your loved ones."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Guardianship;
