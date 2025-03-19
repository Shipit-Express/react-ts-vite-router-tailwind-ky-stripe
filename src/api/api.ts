import ky from 'ky';

const backend = ky.create({
  prefixUrl: import.meta.env.VITE_APP_BACKEND_URL,
});

export default backend;