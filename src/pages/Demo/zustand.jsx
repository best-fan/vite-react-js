import usePriceStore from '../../store/price';
export const ZustandViewDemo = () => {
  const { price, addPrice, setPrice, resetPrice, minusPrice } = usePriceStore();
  return (
    <>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          padding: '20px',
        }}>
        <h1
          style={{
            textAlign: 'center',
          }}>
          ZustandViewDemo
        </h1>
        <p>{price}</p>
        <button onClick={() => addPrice(1)}>+1</button>
        <button onClick={() => minusPrice(1)}>-1</button>

        <button onClick={() => setPrice(99)}>重置指定值</button>
        <button onClick={resetPrice}>重置</button>
      </div>
    </>
  );
};
