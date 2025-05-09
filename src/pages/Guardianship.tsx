
import React from "react";
import { UserCheck, ArrowRight, Shield, Phone, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Button } from "@/components/ui/button";

const Guardianship = () => {
  // Section data
  const guardianshipTypes = [
    {
      title: "Guardian of the Person",
      description: "Manages personal well-being, living arrangements, medical care, education, and daily needs."
    },
    {
      title: "Guardian of the Estate",
      description: "Manages finances and property, paying bills, managing assets, and making financial decisions."
    },
    {
      title: "Temporary Guardianship",
      description: "Short-term care for emergencies, typically limited to 60 days in Texas."
    },
    {
      title: "Permanent Guardianship",
      description: "Long-term care until the ward regains capacity, reaches adulthood, or passes away."
    }
  ];

  const necessarySituations = [
    "A minor with no capable parents",
    "A developmentally disabled adult who cannot make informed decisions",
    "An elderly family member losing capacity",
    "An adult incapacitated by accident or illness",
    "A minor or adult who receives a significant inheritance or settlement"
  ];

  const guardianshipProcess = [
    {
      step: "1",
      title: "Filing an Application",
      description: "Submit paperwork to the appropriate probate court where the ward resides."
    },
    {
      step: "2",
      title: "Notices & Investigation",
      description: "Court notifies interested parties and appoints an attorney ad litem."
    },
    {
      step: "3",
      title: "Medical Evaluation",
      description: "Doctor's certification of incapacity is required for adult cases."
    },
    {
      step: "4", 
      title: "Court Hearing",
      description: "Present evidence of need for guardianship and guardian's qualifications."
    },
    {
      step: "5",
      title: "Appointment",
      description: "If approved, the guardian takes oath and receives Letters of Guardianship."
    },
    {
      step: "6",
      title: "Ongoing Oversight",
      description: "Guardian files regular reports and accountings with the court."
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-woodlands-darkpurple py-16 relative">
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-center mb-8">
            <UserCheck className="w-16 h-16 text-woodlands-gold mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
            Guardianship in Texas
          </h1>
          <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
            Safeguarding minors and incapacitated loved ones with compassionate legal guidance for establishing and managing guardianships.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
            <a
              href="https://woodlandslaw.cliogrow.com/book"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-woodlands-gold text-woodlands-purple rounded-md hover:bg-woodlands-lightgold transition-colors"
            >
              <Calendar className="h-5 w-5" />
              Book a Consultation
            </a>
            <a
              href="tel:8326260116"
              className="inline-flex items-center gap-2 px-6 py-3 border border-woodlands-gold text-woodlands-gold rounded-md hover:bg-woodlands-gold/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call (832) 626-0116
            </a>
            <a
              href="mailto:admin@woodlands.law"
              className="inline-flex items-center gap-2 px-6 py-3 border border-woodlands-gold text-woodlands-gold rounded-md hover:bg-woodlands-gold/10 transition-colors"
            >
              <Mail className="h-5 w-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-woodlands-purple py-16 relative">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/fc6c1c70-3817-4323-a54c-2a04adee36fb.png')] opacity-5 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Introduction */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                What Is Guardianship?
              </h2>
              <div className="prose text-woodlands-cream">
                <p>
                  A <strong>guardianship</strong> in Texas is a court-supervised arrangement where a <strong>guardian</strong> is appointed to make decisions for a person (the <strong>ward</strong>) who is unable to make decisions for themselves. This legal relationship empowers the guardian to manage the personal care and/or finances of the ward in the ward's best interest.
                </p>
                <p>
                  Guardianships are established for two main groups: <strong>minors</strong> (children under 18) and <strong>incapacitated adults</strong> (including adults with disabilities or seniors with conditions like dementia). In all cases, a Texas probate court must approve the guardianship and will oversee the guardian's actions to protect the ward's welfare.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-serif text-woodlands-gold mb-6">Types of Guardianship</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {guardianshipTypes.map((type, index) => (
                    <div key={index} className="bg-woodlands-darkpurple/50 p-6 rounded-lg border border-woodlands-gold/20">
                      <h4 className="text-xl font-serif text-woodlands-gold mb-2">{type.title}</h4>
                      <p className="text-woodlands-cream">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Guardianship for Minor Children */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Guardianship for Minor Children
              </h2>
              <div className="prose text-woodlands-cream">
                <p>
                  If you have young children, one of the most important steps in your estate plan is addressing guardianship. <strong>Guardianship for minors</strong> ensures that if you become incapacitated or pass away, your children will be cared for by a trusted adult of your choosing.
                </p>
                <p>
                  In Texas, parents can <strong>nominate a guardian for their minor children in a will</strong>, and this nomination is highly influential in the court's decision. By naming a guardian, you get to <strong>designate who will assume responsibility for your children's upbringing</strong> – including their financial, educational, and medical needs – rather than leaving that decision to a judge.
                </p>
                <h3>When is a guardian needed for a child?</h3>
                <ul>
                  <li><strong>Both parents are deceased or missing.</strong> If a tragedy leaves a child without living parents, a guardian must be appointed to raise the child.</li>
                  <li><strong>Both parents are incapacitated.</strong> For example, if parents are in a serious accident or suffer an illness that renders them unable to care for the child, a guardianship ensures the child's daily needs are met.</li>
                  <li><strong>Single parent scenario.</strong> If one parent is already out of the picture (due to death or termination of parental rights) and the remaining parent becomes incapacitated or dies, a guardian is needed.</li>
                  <li><strong>Minor inherits money or assets.</strong> Even if a child has a surviving parent caring for them, a <strong>guardian of the estate</strong> might be appointed if the child inherits significant assets.</li>
                </ul>
                <p>
                  <em>Example: <strong>John and Maria</strong>, parents of two young kids in The Woodlands, list Maria's sister as the guardian of their children in their wills. If an accident incapacitates John and Maria, Maria's sister can step in immediately to care for the kids. Because she's named in the will, the court process to appoint her is smoother and faster, providing stability for the children during a difficult time.</em>
                </p>
              </div>
            </div>
          </section>

          {/* Guardianship for Incapacitated Adults */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Guardianship for Adults with Disabilities
              </h2>
              <div className="prose text-woodlands-cream">
                <p>
                  Guardianship is not only for children. It's often essential for <strong>adults who cannot manage their own affairs</strong> due to disability, injury, or illness. Texas law allows guardianships for incapacitated adults to ensure they have someone to make necessary decisions on their behalf.
                </p>
                <h3>Adult children with special needs:</h3>
                <p>
                  When a child with a developmental disability approaches age 18, parents often face a hard reality – once the child becomes a legal adult, the parents <strong>no longer have automatic authority</strong> to make medical, educational, or financial decisions for them. If the adult child lacks the capacity to make decisions, parents may need to establish a guardianship to continue caring for them.
                </p>
                <h3>Incapacitated seniors or adults:</h3>
                <p>
                  If an adult becomes incapacitated – for example, through a traumatic brain injury, stroke, or age-related conditions like dementia or Alzheimer's – a guardianship may be necessary to protect them. <strong>Guardianship for an elderly parent</strong> or spouse can ensure that someone trustworthy can make decisions about the person's medical care, housing, and financial affairs.
                </p>
                <h3>Why not a Power of Attorney?</h3>
                <p>
                  Ideally, adults should sign powers of attorney and other advance directives <em>before</em> they become incapacitated. However, if no valid power of attorney exists, or if the agent is unavailable or abusing their authority, a guardianship is the <strong>backup legal solution</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* When Is Guardianship Necessary */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                When Is Guardianship Necessary?
              </h2>
              <div className="prose text-woodlands-cream mb-8">
                <p>
                  Deciding to seek a guardianship is a serious step. <strong>Guardianship is necessary when an individual (child or adult) lacks capacity and no less-restrictive alternative is available to meet their needs.</strong> You may need to pursue guardianship in situations such as:
                </p>
              </div>
              <div className="bg-woodlands-darkpurple/50 p-6 rounded-lg border border-woodlands-gold/20">
                <ul className="grid md:grid-cols-2 gap-4 text-woodlands-cream list-disc pl-6">
                  {necessarySituations.map((situation, index) => (
                    <li key={index} className="ml-2">{situation}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* The Texas Guardianship Process */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                The Texas Guardianship Process
              </h2>
              <div className="prose text-woodlands-cream mb-8">
                <p>
                  Establishing a guardianship in Texas involves several legal steps and strict oversight by the court. The process can be complex, but our firm will handle the details and guide you through each stage. Here's an overview of how the <strong>guardianship process</strong> works in Texas:
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {guardianshipProcess.map((step, index) => (
                  <div key={index} className="bg-woodlands-darkpurple/50 p-6 rounded-lg border border-woodlands-gold/20">
                    <div className="flex gap-4 items-start">
                      <div className="bg-woodlands-gold text-woodlands-purple w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-xl font-serif text-woodlands-gold mb-2">{step.title}</h4>
                        <p className="text-woodlands-cream">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Estate Planning Connection */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Naming Guardians in Your Estate Plan
              </h2>
              <div className="prose text-woodlands-cream">
                <p>
                  Guardianship issues are closely tied to <strong>estate planning</strong>. A thoughtful estate plan will not only distribute your assets but also ensure your loved ones are cared for by the people you trust. <strong>Naming guardians as part of your estate plan</strong> is especially critical for parents of minors and caregivers of disabled loved ones.
                </p>
                <ul>
                  <li>
                    <strong>Last Will and Testament:</strong> In your will, you should <strong>nominate a guardian for your minor children</strong>. Your nomination is usually honored unless the person is unfit or unwilling to serve.
                  </li>
                  <li>
                    <strong>Guardians for Special Needs:</strong> If you have an adult child with a disability, consider who would act as guardian when you are no longer able. You might also establish a <strong>special needs trust</strong> to manage financial assets.
                  </li>
                  <li>
                    <strong>Temporary Guardian Designations:</strong> Some parents prepare a document to designate who should care for their children <strong>immediately</strong> if the parents become incapacitated.
                  </li>
                  <li>
                    <strong>Powers of Attorney and Medical Directives:</strong> For your <strong>own</strong> potential incapacity, you can sign durable powers of attorney to appoint agents to act for you.
                  </li>
                </ul>
                <p>
                  Including guardianship provisions in your estate plan is an act of love – it means you're looking out for your family's well-being from every angle.
                </p>
              </div>
            </div>
          </section>

          {/* Choosing the Right Guardian */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Choosing the Right Guardian
              </h2>
              <div className="prose text-woodlands-cream">
                <p>
                  <strong>Choosing the right guardian</strong> is often one of the hardest decisions for parents and caregivers. It's normal to have concerns about this choice. Here are some considerations to help you make this decision:
                </p>
                <h3>Factors to Consider in a Guardian:</h3>
                <ul>
                  <li><strong>Relationship and Values:</strong> Is this person already close to your loved one? Do they share your values and outlook on life?</li>
                  <li><strong>Ability and Willingness:</strong> Consider the person's age, health, and life situation. Are they physically and emotionally able to take on this care? Are they willing?</li>
                  <li><strong>Location and Stability:</strong> Geographical proximity can matter – someone nearby may cause less disruption to schooling and social life.</li>
                  <li><strong>Financial sense:</strong> For estate guardians, are they financially responsible? Sometimes the best person to raise a child is not the best person to handle money.</li>
                  <li><strong>Trustworthiness:</strong> Above all, the guardian should be someone you trust deeply with your loved one's well-being.</li>
                </ul>
                <p>
                  Make a list of candidates and discuss with close family. Speak with each potential guardian about your plans in advance. It's not an easy conversation, but it's essential for proper planning.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section>
            <div className="max-w-4xl mx-auto">
              <div className="bg-woodlands-darkpurple/70 p-8 md:p-12 rounded-lg border border-woodlands-gold/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/lovable-uploads/fc6c1c70-3817-4323-a54c-2a04adee36fb.png')] opacity-10 bg-cover bg-center"></div>
                <div className="relative z-10">
                  <Shield className="w-12 h-12 text-woodlands-gold mb-6 mx-auto" />
                  <h2 className="text-3xl font-serif text-woodlands-gold text-center mb-4">
                    Protect Your Loved Ones: Get Trusted Guidance on Guardianship
                  </h2>
                  <p className="text-woodlands-cream text-center mb-8 max-w-2xl mx-auto">
                    Guardianship is a powerful tool to protect those who matter most – but it must be done right. With so much at stake, trust our experienced team to provide knowledgeable and caring guidance every step of the way.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <a
                      href="https://woodlandslaw.cliogrow.com/book"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-woodlands-gold text-woodlands-purple rounded-md hover:bg-woodlands-lightgold transition-colors text-center w-full md:w-auto"
                    >
                      <Calendar className="h-5 w-5" />
                      Schedule a Consultation
                    </a>
                    <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 border border-woodlands-gold text-woodlands-gold rounded-md hover:bg-woodlands-gold/10 transition-colors text-center w-full md:w-auto">
                      <Mail className="h-5 w-5" />
                      Contact Us Today
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Consultation CTA */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Ready to secure your family's future?"
              subtitle="Let us help you navigate the guardianship process for your loved ones."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Guardianship;
