import styles from "./clients.module.css";
import aunalytics from "../../public/aunalytics.png";
import bxfilms from "../../public/bxfilms.png";
import dayscorp from "../../public/dayscorp.png";
import lippert from "../../public/lippert.png";
import lore from "../../public/lore.png";
import swiftlanding from "../../public/swiftlanding.png";
import verso from "../../public/verso.png";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

interface Client {
  name: string;
  image: StaticImageData;
}

const clients: Client[] = [
  {
    name: "Lippert Components",
    image: lippert,
  },
  {
    name: "Lore Coffee Roasters",
    image: lore,
  },
  {
    name: "BX Films",
    image: bxfilms,
  },
  {
    name: "Swift Landing",
    image: swiftlanding,
  },
  {
    name: "Verso Ministries",
    image: verso,
  },
  {
    name: "Days Corporation",
    image: dayscorp,
  },
  {
    name: "Aunalytics",
    image: aunalytics,
  },
];

export default function Clients() {
  const [currentClient, setCurrentClient] = useState<Client>(clients[0]);

  return (
    <div className={clsx(styles.root, "full-width")}>
      <div className={styles.inner}>
        <section className={styles.clients}>
          <h2>Who I&apos;ve worked with</h2>
          <ul>
            {clients.map((client) => (
              <li key={client.name}>
                <button
                  className={clsx(
                    styles.clientButton,
                    currentClient.name == client.name && styles.active
                  )}
                  onClick={() => setCurrentClient(client)}
                >
                  <span>{client.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
        <div className={styles.imageContainer}>
          <Image
            src={currentClient.image}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
