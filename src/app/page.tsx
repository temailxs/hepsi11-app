export default function Home() {
    return (
        <>
            <div className="hero w-100 py-4">
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-md-5">
                            <h1 className="fw-bold">Choose clothes that fits your style!</h1>
                            <p className="text-secondary">
                                Navigate through our wide range of products and choose your
                                favorite attire based on your style and preference. You matter
                                to us.
                            </p>
                            <a
                                className="btn main-btn text-white rounded-pill p-3 fs-6 text-decoration-none"
                                href="shop"
                                target="_blank"
                            >
                                View shop
                            </a>
                            <div className="row mt-4">
                                <div className="col-4">
                                    <h1 className="fw-bold">+200</h1>
                                    <p>Products</p>
                                </div>
                                <div
                                    className="col-4 border-start border-3 border-secondary-subtle"
                                >
                                    <h1 className="fw-bold">+20</h1>
                                    <p>Categories</p>
                                </div>
                                <div
                                    className="col-4 border-start border-3 border-secondary-subtle"
                                >
                                    <h1 className="fw-bold">+1500</h1>
                                    <p>Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 hero-main-img h-100"></div>
                    </div>
                </div>
            </div>
            <div className="brand-menu py-4">
                <div className="container">
                    <div className="row align-items-center fs-1 justify-content-center">
                        <div className="text-center col-6 col-md-3 my-2">
                            <a className="text-white text-decoration-none" href="#brand">BRAND</a>
                        </div>
                        <div className="text-center col-6 col-md-3 my-2">
                            <a className="text-white text-decoration-none" href="#brand">BRAND</a>
                        </div>
                        <div className="text-center col-6 col-md-3 my-2">
                            <a className="text-white text-decoration-none" href="#brand">BRAND</a>
                        </div>
                        <div className="text-center col-6 col-md-3 my-2">
                            <a className="text-white text-decoration-none" href="#brand">BRAND</a>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container my-5">
                <div className="w-100 text-center my-4">
                    <h1 className="fw-bolder">New products</h1>
                </div>
                <div className="w-100 d-flex">
                    <div className="flex-grow-1">
                        <button
                            className="fw-bold btn fs-5 last-products-control btn-outline-primary rounded-circle d-flex align-items-center h-100"
                            type="button"
                            data-scroll="right"
                            data-row-target="last-products"
                        >
                            <i
                                className="bi bi-arrow-right"
                                data-scroll="right"
                                data-row-target="last-products"
                            ></i>
                        </button>
                    </div>
                    <div>
                        <button
                            className="fw-bold btn fs-5 last-products-control btn-outline-primary rounded-circle d-flex align-items-center h-100"
                            type="button"
                            data-scroll="left"
                            data-row-target="last-products"
                        >
                            <i
                                className="bi bi-arrow-left"
                                data-scroll="left"
                                data-row-target="last-products"
                            ></i>
                        </button>
                    </div>
                </div>
                <div
                    className="row my-3 product-row overflow-x-hidden align-items-stretch last-products"
                >
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-1.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">Blue men shirt</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </span>
                                    <span className="text-secondary">4.5</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">150$</div>
                                    <div className="mx-1">
                                        <del>200$</del>
                                    </div>
                                    <div className="mx-1">
                                        <span className="bg-danger-subtle rounded-pill px-2 py-1"
                                        >20%</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-2.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">Red men shirt</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="text-secondary">5</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">250$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-3.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">Warm blue men shirt</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">3</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">300$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-4.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">White men shirt</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">4</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">450$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-100 text-center my-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-3">
                            <a
                                href="shop"
                                className="btn py-2 px-5 rounded-pill border border-1 w-100"
                            >Show all</a
                            >
                        </div>
                    </div>
                </div>
                <hr className="my-2" />

                <div className="w-100 text-center my-4">
                    <h1 className="fw-bolder">High selling products</h1>
                </div>
                <div className="w-100 d-flex">
                    <div className="flex-grow-1">
                        <button
                            className="fw-bold btn fs-5 last-products-control btn-outline-primary rounded-circle d-flex align-items-center h-100"
                            type="button"
                            data-scroll="right"
                            data-row-target="high-sell-products"
                        >
                            <i
                                className="bi bi-arrow-right"
                                data-scroll="right"
                                data-row-target="high-sell-products"
                            ></i>
                        </button>
                    </div>
                    <div>
                        <button
                            className="fw-bold btn fs-5 last-products-control btn-outline-primary rounded-circle d-flex align-items-center h-100"
                            type="button"
                            data-scroll="left"
                            data-row-target="high-sell-products"
                        >
                            <i
                                className="bi bi-arrow-left"
                                data-scroll="left"
                                data-row-target="high-sell-products"
                            ></i>
                        </button>
                    </div>
                </div>
                <div
                    className="row my-3 product-row overflow-x-hidden align-items-stretch high-sell-products"
                >
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-1.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">Blue men shirt</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-half"></i>
                                    </span>
                                    <span className="text-secondary">4.5</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">150$</div>
                                    <div className="mx-1">
                                        <del>200$</del>
                                    </div>
                                    <div className="mx-1">
                                        <span className="bg-danger-subtle rounded-pill px-2 py-1"
                                        >20%</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-2.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">Red men shirt</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </span>
                                    <span className="text-secondary">5</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">250$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-3.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">Warm blue men shirt</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">3</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">300$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-4.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">White men shirt</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">4</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">450$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-3.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">Blue men shirt #2</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">4</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">650$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="col-7 col-lg-3 my-3 last-pr-item">
                        <div className="product-container p-2 rounded-3">
                            <a href="product" className="text-black text-decoration-none">
                                <img
                                    loading="lazy"
                                    src={'/images/products/shirt-6.png'}
                                    alt="product"
                                    className="w-100 rounded-4"
                                />
                                <h2 className="my-3">White men shirt with tie</h2>
                                <p>
                                    <span className="text-warning">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star"></i>
                                        <i className="bi bi-star"></i>
                                    </span>
                                    <span className="text-secondary">3</span>/5
                                </p>
                                <div className="d-flex px-1">
                                    <div className="mx-1 fw-bold">450$</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="w-100 text-center my-5">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-3">
                            <a
                                href="shop"
                                className="btn py-2 px-5 rounded-pill border border-1 w-100"
                            >Show all</a
                            >
                        </div>
                    </div>
                </div>

                <div className="row my-3 rounded-4 browse-container px-5 py-3">
                    <div className="w-100 text-center my-4">
                        <h1 className="fw-bolder">Explore by category</h1>
                    </div>
                    <div className="col-md-3 p-3">
                        <a href="shop" className="text-decoration-none">
                            <div className="browse-clothes casual p-2 px-4 rounded-3 text-white">
                                <h1>Casual</h1>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-9 p-3">
                        <a href="shop" className="text-decoration-none">
                            <div className="browse-clothes formal p-2 px-4 rounded-3 text-white">
                                <h1>Formal</h1>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-9 p-3">
                        <a href="shop" className="text-decoration-none">
                            <div className="browse-clothes party p-2 px-4 rounded-3 text-dark">
                                <h1>Wedding</h1>
                            </div>
                        </a>
                    </div>
                    <div className="col-md-3 p-3">
                        <a href="shop" className="text-decoration-none">
                            <div className="browse-clothes gym p-2 px-4 rounded-3 text-dark">
                                <h1>Gym</h1>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="d-flex w-100 my-5">
                    <div className="flex-grow-1">
                        <h1 className="fw-bold">Customer comments</h1>
                    </div>
                    <div className="fw-bold fs-4">
                        <button
                            className="fw-bold btn fs-5 testimonial-control"
                            type="button"
                            data-scroll="right"
                        >
                            <i className="bi bi-arrow-right" data-scroll="right"></i>
                        </button>
                        <button
                            className="fw-bold btn fs-5 testimonial-control"
                            type="button"
                            data-scroll="left"
                        >
                            <i className="bi bi-arrow-left" data-scroll="left"></i>
                        </button>
                    </div>
                </div>

                <div className="row align-items-stretch customer-testimonial">
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Santina Kozey
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                                nam saepe dicta eveniet corrupti asperiores nesciunt quis est
                                porro mollitia debitis maiores sit quos nostrum velit veritatis,
                                inventore alias ut?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Wellington Rippin
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                                nam saepe dicta eveniet corrupti asperiores nesciunt quis est
                                porro mollitia debitis maiores sit quos nostrum velit veritatis,
                                inventore alias ut?
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Elmira Rolfson
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Error iste laborum est provident. Consequatur quia nemo velit.
                                Eius quo et.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Margret Lockman
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Facere illo dicta sunt voluptatibus. Temporibus molestiae quae
                                qui hic voluptatibus consectetur saepe. Et quia totam architecto
                                tempora dolorem non velit. Odit sunt aliquam ipsam animi ex
                                maiores iusto ut. Omnis maxime iure. Enim asperiores minima
                                consequuntur quis.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Mazie Miller
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Cumque voluptas ipsum ipsum possimus laboriosam consequatur
                                cumque nemo soluta. Doloribus incidunt et. Eum quis tempora. Vel
                                est similique. Eveniet eligendi consequatur magni modi voluptate
                                aut quaerat.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="user-comment p-4 rounded-3 border border-1 bg-white">
                            <h1 className="text-warning fs-5">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-half"></i>
                            </h1>
                            <h1 className="fw-bold fs-4 my-3">
                                Maci Lind
                                <i className="fs-5 bi bi-check-circle-fill text-success"></i>
                            </h1>
                            <p>
                                Error ipsa aut. Qui unde et aliquam rerum. Aspernatur molestiae
                                culpa dolores quasi tempora. Deleniti voluptas voluptatem ipsum
                                qui dolor laudantium quam dignissimos enim.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}