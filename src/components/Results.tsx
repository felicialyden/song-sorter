type ResultsProps = {
  ranking: string[];
};

const Results = ({ ranking }: ResultsProps) => {
  return (
    <div className="column is-half mt-6">
    <div className="card">
      <div className="card-content">
        <table className="table">
          {ranking.map((song, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{song}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
    </div>
  );
};

export default Results;
