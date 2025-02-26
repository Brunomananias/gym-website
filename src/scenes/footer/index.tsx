import react from 'react'
import { SelectedPage } from '../../shared/types'
import Logo from "../../assets/Logo.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer: React.FC<Props> = ({ setSelectedPage }) => {
    return (
      <footer className="bg-pink-100 py-16 mt-10">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
          <div className="mt-16 basis-11/2 md:mt-0">
            <img alt="logo" src={Logo} />
            <p className="my-5">
              We provide world class fitness equipment, trainers and classes to
              get you to yout ultimate fitness goals with ease. We provide true
              care into each and every member.
            </p>
            <p>Evogym All Rights Reserved</p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Links</h4>
            <p className="my-5">
                Massa orci senectus
            </p>
            <p className="my-5">
                Et gravida id et etiam
            </p>
            <p>
                Ullamcorper vivamus
            </p>
          </div>
          <div className="mt-16 basis-1/4 md:mt-0">
            <h4 className="font-bold">Contact Us</h4>
            <p className="my-1">
                Tempus  metus mattis risus volutpat egestas.
            </p>
            <p className="my-5">
                Et gravida id et etiam
            </p>
            <p>(333) 425-6825</p>
          </div>
          <div></div>
        </div>
      </footer>
    );
}

export default Footer;