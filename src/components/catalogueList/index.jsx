
export default function CatalogueList({ title, images, description, price }) {
    return (
        <section className="md:container md:mx-auto">
            <div className="mt-8 grid grid-cols-4 gap-10">
                <div className="card rounded overflow-hidden shadow-md">
                    <div>
                        <img src={images} alt={title} className="w-full sm:h-48 object-cover" />
                    </div>
                    <div className="m-4">
                        <span className="font-bold"> {title} </span>
                        <span className="block"> {description} </span>
                    </div>
                    <div className="m-4">
                        <span className="font-bold"> GHS {price} </span>
                    </div>
                    <div>
                        <span>Add to cart</span>
                    </div>
                </div>

            </div>

        </section>
    );
}