
import faqsApi from '@/services/faqs/faqs.services';
import FAQSection from '../../../components/faq/FAQSection';


export default async function FAQPage({params}: {params: {slug: string}}) {

const faqPages = await faqsApi.getFAQPages();
const faqPage = faqPages.data.find(page => page.attributes.slug === `/${params.slug}`)

  console.log("Contenido de body:", faqPage);


  return (
    <>
    <main>
      <FAQSection sections={faqPages.data} />
      <section className="flex flex-col">
        <h2>{faqPage?.attributes.title} </h2>
        <h4>{faqPage?.attributes.body} </h4>     
      </section>
    </main>  
    </>
  )
}
