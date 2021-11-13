export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
                 
          <a className='navbar-brand page-scroll' href='#page-top'>
            IAJES
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                {/* Replacement for Features in original Template */}
                Features  
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About Us
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                {/* Replacement for 'Services' in original Template */}
                 Goal
              </a>
            </li>
            <li>
              <a href='#projects' className='page-scroll'>
                {/* Replacement for Features in original Template */}
                Projects  
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                 {/* Replacement for Testimonial section */}
                Quotes
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                {/* Replacement for Team */}
                Partners
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
