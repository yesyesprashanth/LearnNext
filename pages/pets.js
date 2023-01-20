import Image from 'next/image';

export default function Pets(){
    return<>
        <div>
            {
                ['1','2','3','4','5'].map(path=>(
                        <div key={path}>
                            <Image src={`/${path}.jpg`} width='280' height = '420'/>
                        </div>
                    ))               
            }
        </div>
    </>
}