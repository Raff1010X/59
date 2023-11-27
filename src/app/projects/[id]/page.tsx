export async function generateStaticParams() {
    return [
         { id: "1" } ,
         { id: "2" } ,
         { id: "3" } ,
         { id: "4" } ,
         { id: "5" } ,
         { id: "6" } ,
         { id: "7" } ,
         { id: "8" } ,
         { id: "9" } ,
         { id: "10" } ,
    ]
}

export default function Project({ params }: { params: { id: string; } }) {
    const { id } = params;
    return (
        <div>
            <h1>ProjectsPage {id}</h1>
        </div>
    )
}