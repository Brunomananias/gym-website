import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const Link: React.FC<Props> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "")
  
  return (
    <div>
      <AnchorLink
        className={`${selectedPage === lowerCasePage ? "text-pink-500" : "text-gray-500"} 
          transition duration-500 hover:text-pink-300`}
        href={`#${lowerCasePage}`}
        onClick={() => setSelectedPage(lowerCasePage)}
      >
        {page}
      </AnchorLink>
    </div>
  )
}

export default Link
