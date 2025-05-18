import { useParams } from 'react-router';
export const DetialView = () => {
  const { id } = useParams();
  return (
    <div>
      这是详情
      <br />
      urlId:{id}
    </div>
  );
};
