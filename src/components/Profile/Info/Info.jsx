import c from './Info.module.css';

const Info = () => {
  return (
    <div className={c.info}>
      <h1>Oleksandr Tomesh</h1>
      <div>Date of birth: 06.02.1994</div>
      <div>City: Warsaw</div>
      <div>Education: VNTU, Electricity, Master</div>
      <div>Web-site:</div>
    </div>
  );
}

export default Info;