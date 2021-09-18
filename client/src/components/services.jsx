export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Goal</h2>
          <p>
            Our goal is to facilitate collaboration, promotion, divulgation and
            support of{" "}
            <b>
              <i>humanitarian projects across Jesuit’s engineering schools</i>
            </b>{" "}
            to improve their impact and scope. Our vision is of a global and
            unified group of Jesuit engineering schools working together towards
            a common aim of designing and implementing humanitarian products
            with the capability of changing lives of the communities we work
            with through projects that promote a human centric design and frugal
            innovation approach.
          </p>
          <img src="img/goal.jpg" className="img-responsive" alt="" />{" "}
          <h2>Our Plan</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
