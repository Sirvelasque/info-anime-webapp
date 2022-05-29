import { useSelector } from 'react-redux';

import '../css/details.css';

const Details = () => {
  const data = useSelector((state) => state.details.data.data);

  return (
    <div>
      <div className="Container">
        <div className="infoContainer">
          <div className="Head">
            <h2>{data.title}</h2>
          </div>
          <div className="Numbers">
            <ul className="list">
              <li className="fli">
                Popularity:
                {data.popularity}
              </li>
              <li className="sli">
                Rank:
                {data.rank}
              </li>
              <li className="fli">
                Score:
                {data.score}
                <br />
                Scored by:
                {data.scored_by}
              </li>
              <li className="sli">
                Year:
                {data.year}
              </li>
            </ul>
          </div>
        </div>
        <div className="synopsis">
          <img alt="Anime one" src={data.images.jpg.large_image_url} />
          <h4>Synopsis</h4>
          <hr />
          <div className="text">
            {data.synopsis}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
