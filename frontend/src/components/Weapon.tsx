import { useState, useEffect } from 'react';
import { Item } from '../interfaces/Item';
import axios from 'axios';

export function ShowWeapon() {
  const [weapon, setWeapon] = useState<Item | null>(null);
  const [weaponLoaded, setWeaponLoaded] = useState<boolean>();

  const getWeapon = async (id: number) => {
    await axios.get(`https://fr.dofus.dofapi.fr/weapons/${id}`)
      .then((res) => {
        setWeapon(res.data);
        setWeaponLoaded(true);

      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    (async () => {
      setWeaponLoaded(false);
      await getWeapon(44);
    })();
  }, []);

  return (
    <div>
      {weaponLoaded ?
        (
          <div>
            <h1>{weapon?.name}</h1>
            <img src = {weapon?.imgUrl}/>
          </div>
        )
        :
        (<p>No user found, please try again</p>)}
    </div >
  );
}


