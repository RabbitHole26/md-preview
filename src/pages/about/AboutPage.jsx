import { Link } from "react-router-dom"
import ButtonPrimary from "../../components/buttons/ButtonPrimary"
import scrollToTop from "../../utils/scroll-to-top"

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-8 sm:gap-[60px] px-3 pt-5 pb-20 items-center sm:mx-[10%]">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eaque in omnis aliquid consequatur. Reprehenderit excepturi expedita laudantium necessitatibus iste illo possimus omnis placeat atque, exercitationem ad praesentium, pariatur asperiores!
        Asperiores id quae vel! Rem porro dolores maxime exercitationem id! Tenetur reprehenderit aliquam odit fuga vitae omnis distinctio impedit sint officiis illo iusto ut, eum rem libero? Veritatis, odio veniam.
        Fugiat eum laudantium, aliquam perspiciatis iure reprehenderit! Eius numquam rerum itaque inventore tempore necessitatibus libero velit ipsum accusamus eveniet magnam saepe quo mollitia suscipit animi sit, aliquid alias nostrum similique!
        Eveniet earum, reprehenderit odio in iste ea officiis? Sapiente nostrum perspiciatis dicta impedit nesciunt sit debitis aspernatur quas, ipsa maiores voluptate dolorem? Nam velit numquam ullam fuga porro praesentium non!
        Possimus praesentium, hic iure sed saepe, architecto reprehenderit, numquam eos incidunt natus voluptatum quidem delectus vel odit blanditiis labore vitae sequi? Quaerat, quos! Sed earum qui quos assumenda eaque beatae.
        Natus corporis aliquid ut dolorem velit excepturi vero praesentium nulla animi consectetur, quibusdam quo repellendus eligendi unde. Fuga laboriosam distinctio corrupti, veritatis asperiores dicta cumque et, repudiandae omnis ipsum temporibus.
        Nobis perspiciatis voluptas, adipisci tenetur omnis velit sint modi iusto quasi perferendis aperiam porro pariatur eos voluptatem voluptate provident possimus tempora ex consequuntur saepe quas repudiandae quidem. Temporibus, doloribus doloremque?
        Maxime repellat voluptatum, enim expedita, deserunt vel nulla ut quibusdam dolorum cupiditate esse consectetur laborum rem non cumque excepturi nisi sunt, modi amet quam ea nihil earum. Voluptatibus, suscipit omnis.
        Ea assumenda corrupti adipisci, facere, molestiae veritatis enim nam voluptatem eveniet odio fugit et unde pariatur itaque? Repellendus enim eligendi sint iusto libero excepturi, illum eaque accusantium laborum in voluptas!
        Cum, vel nam aut quae, ut perferendis tempora molestias excepturi cumque atque sint eius aliquam recusandae, adipisci veritatis expedita. Nemo aliquid dolorem culpa perferendis alias amet impedit deleniti eveniet magni?
      </p>
      {/* for some reason when it redirects to main page, the page is scrolled down, so had to force it to redirect and then scroll up. */}
      <Link onClick={scrollToTop} to='/'>
        <ButtonPrimary>
          Back to homepage
        </ButtonPrimary>
      </Link>
    </div>
  )
}

export default AboutPage
