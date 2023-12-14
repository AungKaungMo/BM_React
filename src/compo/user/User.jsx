function User({ userData, remove }) {
    const handleRemove = () => {
        remove(userData.uuid)
    }
  return (
    <div className="row align-items-center mb-3 py-2 border rounded">
      <div className="col-3">
        <img src={userData.image} width="70" height="70" className="rounded" />
      </div>
      <div className="col-5 pt-2">
        <p className="mb-0">Ph: {userData.phone}</p>
        <p>Cell: {userData.cell}</p>
      </div>
      <div className="col-2">{userData.name}</div>
      <div className="col-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="p-1 rounded bg-danger text-white"
          style={{
            cursor: "pointer",
          }}
          onClick={handleRemove}
        >
          <path
            fill="currentColor"
            d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"
          />
        </svg>
      </div>
    </div>
  );
}

export default User;
