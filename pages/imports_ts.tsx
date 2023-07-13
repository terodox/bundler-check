// Static Import
import InfoCard from "@/components/MyInfoCardComponent";

// In Line Require
const mm = require('../modules/MyMathModule');

// In Line static assests
import Image from "next/image";
import { useState } from "react";

function TestImports() {
    const [scrambleStr, setStr] = useState('-');

    // Dynamic imports
    if (mm.add(2, 1) === 3) {
        import('../modules/MyStringModule')
        .then(someModule => {
            setStr(someModule.getString())
        })
    }

    return (
        <div style={{ margin: '15px'}}>
            <InfoCard title="Title" description="Description" />
            <p>2 + 1 = {mm.add(2, 1)}</p>
            <p>2 - 1 = {mm.subtract(2, 1)}</p>
            <Image
                alt="Photo by Nick Perez at unsplash.com"
                src={"/nick-perez-unsplash.jpg"}
                width={200}
                height={200}
            />
            <p>{scrambleStr}</p>
        </div>
    );
}

export default TestImports;
