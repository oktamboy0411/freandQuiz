import { BsTelegram , BsFacebook} from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div className="flex items-center flex-col justify-center gap-5 py-8 bg-bgGray">
        <div className="flex items-center justify-center gap-4">
            <a href="https://t.me/OkTaM_bOy_0411">
                <BsTelegram className=" text-pinkColor w-8 h-8" />
            </a>
            <a href="">
                <BsFacebook className=" text-pinkColor w-8 h-8"/>
            </a>
            <a href="https://www.instagram.com/_oktam_qulsoatov_coder_0411_/?next=%2F">
                <RiInstagramFill className=" text-pinkColor w-9 h-9"/>
            </a>
        </div>
        <p className=" font-normal text-xs">Disclaimer: All content is provided for fun and entertainment purposes only.</p>
        <p className=" font-bold text-sm">2023 Frined quiz by O'ktamboy</p>
    </div>
  )
}

export default Footer