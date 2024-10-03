import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { faqData } from '@/content';

export default function FAQSection() {
  return (
    <div className="max-w-[920px] w-full sm:my-12 sm:mt-24 mx-auto">
      <h1 className="text-[24px] sm:text-[32px] 1920:text-[40px] font-[family-name:var(--font-nippo)] font-bold mb-4">
        FAQ
      </h1>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqData.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b border-border !mt-0 px-4 py-3 text-muted-foreground hsover:text-primary hsover:bg-accent-foreground transition"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex justify-between items-center w-full text-[16px] 1920:text-[20px]">
                <span className="text-left">{item.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-[16px] 1920:text-[20px]">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
