import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { faqItems } from '@/constants/faqItems'

const renderFaqItems = () => {
    return faqItems.map((faq) => {
        const { value, question, response } = faq;
        const responseNodes = (response: string[]) => {
            return response.map((item, index) => (
                <p key={index} className="mb-3">{item}</p>
            ))
        }

        return <AccordionItem key={value}value={ value } className="border-(--grey-chateau)/40">
                <AccordionTrigger>{ question }</AccordionTrigger>
                <AccordionContent>{ responseNodes(response) }</AccordionContent>
            </AccordionItem>
    })
}
function Faqs() {
    return <section id="faqs">
        <div className="section-content section-dark-green preFadeIn">
            <div className="faq-title text-center mb-5 preFadeIn">
                <h1 className="text-center hidden sm:block">Frequently Asked Questions</h1>
                <h1 className="text-center sm:hidden">FAQs</h1>
            </div>
            <div className="faqs-content w-full sm:w-[90%]">
                <Accordion type="multiple">
                    {renderFaqItems()}
                </Accordion>
            </div>
        </div>
    </section>
}

export default Faqs;