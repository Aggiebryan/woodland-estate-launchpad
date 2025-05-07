
import { Shield, CheckCircle, AlertTriangle, FileCheck, HelpCircle, Phone, Calendar } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import ConsultationCTA from "@/components/shared/ConsultationCTA";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const Wills = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
    alert("Thank you for contacting us! We'll be in touch soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <MainLayout>
      <div className="bg-woodlands-purple min-h-screen">
        {/* Hero Section */}
        <div className="bg-woodlands-darkpurple py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <Shield className="w-16 h-16 text-woodlands-gold mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-woodlands-gold text-center mb-6">
              Texas Wills Attorneys in The Woodlands, TX
            </h1>
            <p className="text-woodlands-cream text-center max-w-3xl mx-auto text-lg font-body">
              Protect your family's future with a legally sound will. Planning for the future is one of the most important gifts you can give your loved ones.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction Section */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Protect Your Family's Future with a Legally Sound Will
              </h2>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  A will – also known as a Last Will and Testament – is a legal document that ensures your wishes are carried out and your family is protected after you're gone. At The Woodlands Law Firm, based in The Woodlands (a suburb of Houston, Texas), our experienced estate planning attorneys make the process of creating a will simple and clear.
                </p>
                <p>
                  We help Texas residents – including seniors looking to secure their legacy, parents of young children, high-net-worth individuals with complex assets, business owners concerned about succession, and anyone else seeking peace of mind – draft wills that reflect their wishes and comply with Texas law.
                </p>
                <p>
                  Facing the unexpected is easier with a plan. Our team understands that discussing end-of-life matters can feel daunting, but we're here to guide you with compassion and clarity. With over a decade of experience serving families in Texas, we know how to craft wills that honor your intentions and provide for your loved ones.
                </p>
                <p>
                  Whether you need to appoint guardians for your children, designate who inherits specific assets, or outline special provisions for your business or charitable gifts, we tailor your will to fit your unique situation.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a href="tel:+18326260116" className="flex-1">
                    <Button className="w-full bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                      <Phone className="mr-2 h-4 w-4" />
                      Call (832) 626-0116
                    </Button>
                  </a>
                  <a 
                    href="https://woodlandslaw.cliogrow.com/book" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full bg-woodlands-darkpurple text-woodlands-gold border border-woodlands-gold hover:bg-woodlands-gold/10">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Online
                    </Button>
                  </a>
                </div>
              </div>
            </section>

            {/* Benefits Section */}
            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Benefits of Having a Will
                </h2>
              </div>
              <div className="space-y-6 text-woodlands-cream font-body">
                <p>
                  Creating a will offers many benefits for you and your family. Here are some of the key advantages of having a comprehensive will in Texas:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-3">Control Over Asset Distribution</h3>
                    <p>A will lets you decide who inherits your property, money, and personal belongings. This ensures your assets go to the people (or charities) you choose, rather than being distributed according to a one-size-fits-all state formula.</p>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-3">Protection for Your Children</h3>
                    <p>If you have minor children, a will is crucial. It allows you to nominate a guardian you trust to care for your children if something happens to you. Without a will, the court will decide who becomes their guardian.</p>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-3">Preventing Family Conflicts</h3>
                    <p>By stating your wishes unambiguously, a will reduces confusion and potential disputes among surviving family members. This can minimize family conflicts during an already emotional time.</p>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/40 p-5 rounded-lg border border-woodlands-gold/20">
                    <h3 className="text-xl text-woodlands-gold mb-3">Avoiding Intestacy Issues</h3>
                    <p>Dying without a will means Texas law will determine who gets your assets. A will helps your estate avoid the full intestacy process, simplifying legal proceedings and often saving time and money in probate.</p>
                  </div>
                </div>
                
                <p className="text-center mt-6 text-woodlands-gold italic">
                  In short, a well-drafted will is a gift to yourself and to those you care about. It provides security, clarity, and control.
                </p>
              </div>
            </section>

            {/* Dying Without a Will Section */}
            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  What Happens If You Die Without a Will in Texas?
                </h2>
              </div>
              <div className="space-y-4 text-woodlands-cream font-body">
                <p>
                  Failing to leave a will can have serious consequences for your estate and your family. In Texas, if you pass away without a valid will, your estate will be distributed under Texas intestacy laws.
                </p>
                
                <div className="space-y-6 mt-6">
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif text-lg">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">State-Determined Distribution</h3>
                      <p>Texas law will decide who your heirs are and what share of your property each heir receives. This rigid formula depends on your family situation and can lead to outcomes that surprise your family.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif text-lg">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">Delayed Access to Assets</h3>
                      <p>Without a will naming an executor, the court must appoint an administrator to handle your estate. This can delay the distribution of assets. Your loved ones might have to wait months or even years through a probate process.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif text-lg">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">Higher Cost and Complexity</h3>
                      <p>Dying intestate can make the probate process more complicated and costly. There may be additional legal proceedings to determine heirs, and potential disputes if someone believes they should inherit.</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif text-lg">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">No Control Over Important Decisions</h3>
                      <p>Not having a will means you lose control over important personal decisions. The court will not know your preferences for things like who should care for your minor children, or what happens to special family heirlooms or pets.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-woodlands-darkpurple/60 p-5 rounded-lg border border-woodlands-gold/30 mt-8">
                  <p className="italic">
                    Don't leave your estate to chance. Our attorneys can help you draft a Texas will that covers all contingencies, so you never have to worry about the intestacy laws affecting your family's future.
                  </p>
                </div>
              </div>
            </section>

            {/* Myths Section */}
            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FileCheck className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Common Myths About Wills
                </h2>
              </div>
              <div className="space-y-6 text-woodlands-cream font-body">
                <p>
                  There are many misconceptions surrounding wills and estate planning. Unfortunately, these myths cause some people to put off creating a will or misunderstand what a will can do. Let's clear up a few common myths about wills:
                </p>
                
                <div className="space-y-8">
                  <div className="bg-woodlands-darkpurple/30 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Myth: "Only wealthy people or seniors need a will."</h3>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-woodlands-gold/20 flex items-center justify-center">
                          <span className="text-woodlands-gold font-serif">✓</span>
                        </div>
                      </div>
                      <p><span className="text-woodlands-gold font-medium">Reality:</span> Every adult can benefit from a will. Even if you think you don't have "enough" assets, you likely own things of value – a car, a savings account, personal possessions, maybe a home or life insurance. And if you have young children, naming a guardian is reason enough alone.</p>
                    </div>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/30 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Myth: "If I'm married, my spouse will automatically get everything."</h3>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-woodlands-gold/20 flex items-center justify-center">
                          <span className="text-woodlands-gold font-serif">✓</span>
                        </div>
                      </div>
                      <p><span className="text-woodlands-gold font-medium">Reality:</span> In Texas, it's not guaranteed that your spouse inherits all your property if you die without a will. Texas intestate laws might split your estate between your spouse and children or other relatives. The best way to ensure your spouse inherits exactly what you intend is to clearly state it in a will.</p>
                    </div>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/30 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Myth: "Wills are only about who gets my money."</h3>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-woodlands-gold/20 flex items-center justify-center">
                          <span className="text-woodlands-gold font-serif">✓</span>
                        </div>
                      </div>
                      <p><span className="text-woodlands-gold font-medium">Reality:</span> A will does far more than distribute money. You can specify funeral wishes, set up trusts for minor children, forgive debts, or leave instructions for personal items with sentimental value. Perhaps most importantly, a will names an Executor to manage your estate and carry out your instructions.</p>
                    </div>
                  </div>
                  
                  <div className="bg-woodlands-darkpurple/30 p-6 rounded-lg">
                    <h3 className="text-xl text-woodlands-gold mb-3">Myth: "I can just write something on paper or use an online form."</h3>
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-woodlands-gold/20 flex items-center justify-center">
                          <span className="text-woodlands-gold font-serif">✓</span>
                        </div>
                      </div>
                      <p><span className="text-woodlands-gold font-medium">Reality:</span> While Texas does recognize handwritten wills and there are do-it-yourself forms out there, small mistakes can invalidate your will or create loopholes. Working with an experienced Texas will attorney ensures your will is done correctly and legally, giving you full confidence that it will hold up when needed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-white/5 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-8 w-8 text-woodlands-gold mr-4" />
                <h2 className="text-3xl font-serif text-woodlands-gold">
                  Frequently Asked Questions about Wills in Texas
                </h2>
              </div>
              <div className="space-y-8 text-woodlands-cream font-body">
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">When should I create or update my will?</h3>
                  <p>The best time to create a will is now — as soon as you are an adult with any assets or responsibilities. Major life events are key triggers to either make your first will or update an existing one. You should consider writing a will if you are married, have children, own property, or have any savings or valuable possessions.</p>
                  <p className="mt-2">Once you have a will, update it whenever your circumstances change significantly. This includes events like marriage, divorce, the birth of a child or grandchild, a substantial change in financial status, or moving to a new state.</p>
                </div>
                
                <Separator className="bg-woodlands-gold/20" />
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">What are the legal requirements for a valid will in Texas?</h3>
                  <p>Texas has specific requirements to make a will valid and enforceable. In general, a will in Texas must be:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                    <li>Made by a person 18 or older who is of sound mind</li>
                    <li>In writing (typed or handwritten)</li>
                    <li>Signed by the testator in the presence of at least two witnesses</li>
                    <li>Witnesses must also sign the will in the presence of the testator</li>
                  </ul>
                  <p className="mt-2">Most Texas wills also include a self-proving affidavit signed before a notary public – this helps speed up probate by allowing the will to be accepted without the witnesses having to appear in court.</p>
                </div>
                
                <Separator className="bg-woodlands-gold/20" />
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">Does having a will avoid probate in Texas?</h3>
                  <p>No, having a will does not avoid probate – but it makes the probate process much smoother. With a well-drafted will, probate in Texas is generally straightforward: the court validates the will, your named Executor is officially appointed, and they can then carry out your instructions with minimal court supervision.</p>
                  <p className="mt-2">If your goal is to avoid probate entirely, you may need to consider setting up a living trust or other estate planning tools in addition to your will. We can advise you on the best approach for your situation.</p>
                </div>
                
                <Separator className="bg-woodlands-gold/20" />
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">How is a "last will and testament" different from a "living will"?</h3>
                  <p>A Last Will and Testament is a document that states how you want your property distributed and affairs handled after your death. It can also include naming guardians for children and other post-death instructions.</p>
                  <p className="mt-2">In contrast, a Living Will in Texas is actually another term for an Advance Directive or Directive to Physicians – it's a document that expresses your wishes for medical care while you are alive but incapacitated, such as end-of-life decisions.</p>
                  <p className="mt-2">Both are important components of a complete estate plan.</p>
                </div>
                
                <Separator className="bg-woodlands-gold/20" />
                
                <div>
                  <h3 className="text-xl text-woodlands-gold mb-3">Can a will cover my business or high-value assets?</h3>
                  <p>Yes, a will can (and should) include any assets you own – including business interests, real estate, investments, and high-value personal property. In your will, you can specify who should inherit your business ownership or shares, or outline your wishes for the business.</p>
                  <p className="mt-2">For high-net-worth individuals and business owners, instruments like living trusts, buy-sell agreements, or family limited partnerships can provide more control and tax advantages alongside your will.</p>
                </div>
              </div>
            </section>

            {/* Our Process Section */}
            <section className="bg-white/5 p-8 rounded-lg">
              <h2 className="text-3xl font-serif text-woodlands-gold mb-6">
                Our Will Planning Process and Services
              </h2>
              <div className="space-y-6 text-woodlands-cream font-body">
                <p>
                  At The Woodlands Law Firm, we strive to make the process of creating your will as straightforward and comfortable as possible. Our will planning process typically involves:
                </p>
                
                <div className="space-y-6 mt-4">
                  <div className="flex p-4 bg-woodlands-darkpurple/40 rounded-lg border border-woodlands-gold/20">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">Free Consultation</h3>
                      <p>We start with a one-on-one meeting (in person or virtual) to understand your situation, answer your questions, and discuss your goals. This consultation is free of charge. We'll talk about your family, your assets, and what you want to achieve with your estate plan.</p>
                    </div>
                  </div>
                  
                  <div className="flex p-4 bg-woodlands-darkpurple/40 rounded-lg border border-woodlands-gold/20">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">Customized Planning</h3>
                      <p>Based on your input, our attorneys will offer guidance on the best approach for your will. We'll help you consider all the important decisions, such as selecting an Executor, choosing guardians for minors, and listing all the assets and special gifts you want in your will.</p>
                    </div>
                  </div>
                  
                  <div className="flex p-4 bg-woodlands-darkpurple/40 rounded-lg border border-woodlands-gold/20">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">Drafting Your Will</h3>
                      <p>Our legal team will draft your will, carefully wording it to meet Texas legal requirements and your specific instructions. We use clear, precise language to avoid any ambiguity. This draft will be sent to you for review.</p>
                    </div>
                  </div>
                  
                  <div className="flex p-4 bg-woodlands-darkpurple/40 rounded-lg border border-woodlands-gold/20">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif font-bold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">Signing and Execution</h3>
                      <p>Once you are satisfied with your will, we will arrange the will signing ceremony. This involves signing the final document in the presence of the required two witnesses. We also typically include a notary so that a self-proving affidavit can be executed at the same time.</p>
                    </div>
                  </div>
                  
                  <div className="flex p-4 bg-woodlands-darkpurple/40 rounded-lg border border-woodlands-gold/20">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-woodlands-gold/20 flex items-center justify-center mr-4">
                      <span className="text-woodlands-gold font-serif font-bold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl text-woodlands-gold mb-2">Aftercare – Probate Guidance and Updates</h3>
                      <p>We don't just hand you the signed will and say goodbye. We'll guide you on how and where to store your will safely so it's accessible when needed. We also remain available for future updates – as your life changes, we can easily update or amend your will.</p>
                    </div>
                  </div>
                </div>
                
                <p className="mt-4">
                  Throughout this process, our focus is on you – your peace of mind and your confidence in your estate plan. We combine deep knowledge of Texas estate law with a personalized, caring approach. You'll never feel like you're navigating legal jargon alone; we explain everything in plain language and make sure you're comfortable every step of the way.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Form Section */}
          <section className="mt-12 bg-gradient-to-r from-woodlands-darkpurple to-woodlands-purple p-8 rounded-lg max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif text-woodlands-gold text-center mb-6">
              Ready to Secure Your Legacy? Contact Us Today.
            </h2>
            <p className="text-woodlands-cream text-center mb-8">
              Having a will in place is one of the most responsible and caring things you can do for your family. Don't put it off any longer.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 text-woodlands-cream">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-woodlands-gold mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl text-woodlands-gold mb-1">Call us</h3>
                    <p>Speak directly with our friendly team at (832) 626-0116.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 text-woodlands-gold mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl text-woodlands-gold mb-1">Schedule Online</h3>
                    <p>Use our easy online booking tool to choose a date and time that works best for you.</p>
                  </div>
                </div>
                
                <div className="bg-white/5 p-5 rounded-lg border border-woodlands-gold/20 mt-6">
                  <p className="italic text-woodlands-cream/90">
                    "Your consultation is 100% free and confidential. During our meeting, we'll discuss how we can tailor a will to your needs and answer all your questions."
                  </p>
                </div>
                
                <div className="mt-6">
                  <a 
                    href="https://woodlandslaw.cliogrow.com/book" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold">
                      Schedule Your Free Consultation
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="bg-white/5 p-6 rounded-lg border border-woodlands-gold/20">
                <h3 className="text-xl text-woodlands-gold mb-4 text-center">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-woodlands-cream mb-1">Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-2 rounded bg-woodlands-darkpurple/80 border border-woodlands-gold/30 text-woodlands-cream focus:outline-none focus:ring-2 focus:ring-woodlands-gold/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-woodlands-cream mb-1">Email*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                      className="w-full px-4 py-2 rounded bg-woodlands-darkpurple/80 border border-woodlands-gold/30 text-woodlands-cream focus:outline-none focus:ring-2 focus:ring-woodlands-gold/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-woodlands-cream mb-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded bg-woodlands-darkpurple/80 border border-woodlands-gold/30 text-woodlands-cream focus:outline-none focus:ring-2 focus:ring-woodlands-gold/50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-woodlands-cream mb-1">How Can We Help You?</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Let us know about your estate planning needs..." 
                      className="w-full px-4 py-2 rounded bg-woodlands-darkpurple/80 border border-woodlands-gold/30 text-woodlands-cream focus:outline-none focus:ring-2 focus:ring-woodlands-gold/50"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-woodlands-gold text-woodlands-purple hover:bg-woodlands-lightgold font-medium"
                  >
                    Contact Us Now
                  </Button>
                </form>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <div className="mt-16">
            <ConsultationCTA 
              title="Secure your family's future today"
              subtitle="Get expert guidance on creating a legally sound will tailored to your needs."
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Wills;
