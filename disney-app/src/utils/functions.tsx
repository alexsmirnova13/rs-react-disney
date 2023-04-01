export function pass_gen() {
  const chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ123456789';
  let str = '';
  for (let i = 0; i < 20; i++) {
    const pos = Math.floor(Math.random() * chrs.length);
    str += chrs.substring(pos, pos + 1);
  }
  return str;
}

export function getBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
}
