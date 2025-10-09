import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
const data = [
    {
        id: 1,
        question: "What is ARULA therapy?",
        answer: "ARULA therapy is a comprehensive approach designed to help children with Autism Spectrum Disorder (ASD) make remarkable progress in all areas of concern."
    },
    {
        id: 2,
        question: "How long does the therapy program last?",
        answer: "The duration of the therapy program can vary based on the individual needs of each child. Typically, we recommend a minimum commitment of six months to see significant progress."
    },
    {
        id: 3,
        question: "Is ARULA therapy suitable for all children with ASD?",
        answer: "No. ARULA therapy is tailored to meet the unique needs of each child. We conduct thorough assessments to determine the most appropriate interventions and support."
    },
    {
        id: 4,
        question: "How often are therapy sessions conducted?",
        answer: "Therapy sessions are typically conducted multiple times a week, depending on the individual needs and goals of each child."
    }
]
export default function Faq() {
    return (
        <section className="container mx-auto py-10 sm:py-14 lg:py-18 px-5">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gray-100">FAQ</span>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight capitalize">Frequently asked questions</h2>
            </div>
            <div className="max-w-4xl mx-auto text-gray-600">

                <Accordion type="single" collapsible className="w-full space-y-2">
                    {
                        data && data.map((item) => (
                            <AccordionItem key={item.id} value={"item-" + item.id} className="rounded-lg px-4">
                                <AccordionTrigger className="text-md text-left font-normal transition-all hover:no-underline cursor-pointer">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))
                    }
                </Accordion>
            </div>
        </section>
    )
}
