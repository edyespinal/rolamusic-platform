const Icon = ({ size, alt }: { size: number; alt?: boolean }) => (
  <svg
    width={size / 3}
    height="100%"
    viewBox="0 0 453 556"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinejoin: "round",
      strokeMiterlimit: 2,
    }}
  >
    <g transform="matrix(1,0,0,1,8.2125,343.432)">
      <path
        d="M0,211.65L93.383,211.65C97.918,211.65 101.595,207.973 101.595,203.438L101.595,114.426C101.595,112.264 100.742,110.189 99.222,108.652L-8.212,0L-8.212,203.438C-8.212,207.973 -4.535,211.65 0,211.65"
        style={{
          fill: alt ? "rgb(12,12,12)" : "rgb(0,194,183)",
          fillRule: "nonzero",
        }}
      />
    </g>
    <g transform="matrix(1,0,0,1,374.164,448.627)">
      <path
        d="M0,-344.407L0.001,-344.409C0.038,-344.384 0.075,-344.358 0.113,-344.333C25.117,-328.202 46.467,-306.895 62.651,-281.929C66.86,-275.435 76.922,-277.885 77.712,-285.583C80.765,-315.332 77.646,-350.598 51.888,-369.783C23.187,-391.161 7.114,-421.389 -1.383,-443.318C-4.306,-450.863 -15.182,-450.207 -17.156,-442.36L-48.106,-319.336L-48.103,-319.324C-48.105,-319.325 -48.106,-319.325 -48.108,-319.326L-89.493,-154.825C-95.624,-124.401 -122.592,-101.521 -154.87,-101.722C-190.754,-101.945 -220.177,-131.103 -220.707,-166.984C-221.254,-204.04 -191.379,-234.251 -154.449,-234.251C-143.167,-234.251 -132.545,-231.431 -123.247,-226.458C-118.664,-224.008 -112.987,-226.264 -111.42,-231.219L-80.349,-329.449C-90.576,-331.533 -101.147,-332.664 -111.969,-332.756L-111.949,-332.773L-366.081,-332.773C-370.545,-332.773 -374.164,-329.155 -374.164,-324.691L-374.164,-184.655L-88.332,104.019C-86.788,105.578 -84.685,106.456 -82.491,106.456L52.555,106.456C59.768,106.456 63.419,97.769 58.371,92.616L-48.593,-16.58L-48.6,-16.584C10.165,-41.744 51.339,-100.092 51.339,-168.063C51.339,-220.657 26.689,-267.493 -11.69,-297.649L-5.259,-323.37L0,-344.407Z"
        style={{ fill: alt ? "rgb(12,12,12)" : "white", fillRule: "nonzero" }}
      />
    </g>
  </svg>
);

export { Icon };
