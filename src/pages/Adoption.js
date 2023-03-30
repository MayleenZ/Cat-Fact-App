function Adoption() {
  return (
    <div>
      <h1 className = "adopt-title">Interested in Adopting in NYC?</h1>
      <p>
        Check out these awesome sites where you can find your next furry friend
      </p>
      <img src = "https://adopets-prod.s3.amazonaws.com/public/gallery_data/src/20221004_163651_16649014115812.jpeg?width=400" width = "500px" alt="cove-cat"/>
      <ul>
        <li>
          <a href="https://www.animalprojectnyc.org/" target="_blank" rel="noreferrer" >
            NYC Animal Project
          </a>
        </li>
        <li>
          <a
            href=" https://petsmartcharities.org/adopt-a-pet?gclid=CjwKCAjw5pShBhB_EiwAvmnNV2J4GsGbrXtor4V5oW2JfEd9_WQwvtRF_9nlLPkRHTeDlwv5Ep_HrhoCRyQQAvD_BwE"
            target="_blank" rel="noreferrer" 
          >
            Pet Smart Charities
          </a>
        </li>
        <li>
          <a
            href=" https://www.aspca.org/nyc/aspca-adoption-center/adoptable-cats"
            target="_blank" rel="noreferrer" 
          >
            ASPCA Adoption
          </a>
        </li>
        <li>
          <a href="https://bestfriends.org/new-york-city/adopt" target="_blank" rel="noreferrer" >
            Best Friends NYC
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Adoption;
