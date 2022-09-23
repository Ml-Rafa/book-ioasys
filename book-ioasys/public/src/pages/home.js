import React, { useState, useEffect } from "react";
import { NavigateProvider } from "react-use-navigate";
import { message } from "antd";

import Card from "../components/Card/card";
import Header from "../components/Header/header";
import Button from "../components/Button/button";
import Modalr from "../components/Modal/modal";
import Loader from "../components/Loader/loader";
import Select from "../components/Select/select";

import bookPlaceholder from "../img/bg.png";

import { CATEGORIES } from "../services/categories";

import { fetchBook } from "../services/integrationAPI";

import {
  deleteAuthorization,
  deleteUser,
  getAuthorization,
  getUser,
} from "../services/loginSession";

import "./home.css";

const Home = () => {
  let navigate = NavigateProvider();

  const [loading, setLoading] = useState(false);

  const [user] = useState(getUser());
  const [auth] = useState(getAuthorization());

  const [books, setBooks] = useState([]);

  const [currentBook, setCurrentBook] = useState();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [category, setCategory] = useState("biographies");

  const handlefetchBook = () => {
    setLoading(true);

    fetchBook(page, category, auth)
      .then((res) => {
        setTotalPages(Math.ceil(res.data.totalPages));
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleCardClicked = (book) => {
    setCurrentBook(book);
    setModalIsVisible(true);
  };

  const logout = () => {
    deleteAuthorization();
    deleteUser();

    message.success("Deslogado com sucesso.");
    navigate("/");
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const categoryChanged = (category) => {
    setCategory(category);
    setPage(1);
  };

  useEffect(() => {
    handlefetchBook();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    if (auth) handlefetchBook();
    else navigate("/");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, category]);

  useEffect(() => {
    if (user) message.info(`Autenticado como ${user.name}.`);
  }, [user]);

  return (
    auth && (
      <Loader loading={loading}>
        <div className="home-page">
          <div className="home-page-container">
            <div className="home-page-header-container">
              <Header theme="dark" />

              <div className="category-select">
                <Select
                  defaultValue={"biographies"}
                  values={CATEGORIES}
                  onChange={categoryChanged}
                />
              </div>

              <div className="header-welcome">
                <span>
                  Bem vindo, <b>{user.name}!</b>
                </span>

                <Button
                  bgColor="transparent"
                  fnColor="#333333"
                  borderColor="#333333"
                  padding="2px"
                  width="30px"
                  height="30px"
                  borderRadius="50%"
                  onClick={logout}
                >
                  <i className="fas fa-sign-out-alt" />
                </Button>
              </div>
            </div>

            <div className="home-page-books-container">
              {books &&
                books?.map((book) => (
                  <Card
                    key={book.id}
                    className="book-card"
                    onClick={() => handleCardClicked(book)}
                  >
                    <div className="book-cover-container">
                      <img
                        src={book.imageUrl || bookPlaceholder}
                        alt="Book Cover"
                      />
                    </div>

                    <div className="book-info-container">
                      <div className="book-top-info">
                        <h4>{book.title}</h4>
                        <p>
                          {book.authors.map(
                            (author, i) =>
                              ((i === 1 || book.authors.length === 1) &&
                                `${author}.`) ||
                              (i < 1 && `${author}, `)
                          )}
                        </p>
                      </div>

                      <div className="book-bottom-info">
                        <p>{book.pageCount} páginas</p>
                        <p>Editora {book.publisher.substring(0, 15)}...</p>
                        <p>Publicado em {book.published}</p>
                      </div>
                    </div>
                  </Card>
                ))}
            </div>

            <div className="home-page-footer-container">
              <span>
                Página <b>{page}</b> de <b>{totalPages}</b>
              </span>

              <Button
                bgColor="transparent"
                fnColor="#333333"
                borderColor="#333333"
                padding="2px"
                width="30px"
                height="30px"
                borderRadius="50%"
                disabled={page === 1}
                onClick={previousPage}
              >
                <i className="fas fa-chevron-left" />
              </Button>

              <Button
                bgColor="transparent"
                fnColor="#333333"
                borderColor="#333333"
                padding="2px"
                width="30px"
                height="30px"
                borderRadius="50%"
                disabled={page === totalPages}
                onClick={nextPage}
              >
                <i className="fas fa-chevron-right" />
              </Button>
            </div>
          </div>

          {currentBook && (
            <Modalr
              closable={false}
              visible={modalIsVisible}
              onCancel={() => setModalIsVisible(false)}
            >
              <div className="modal-container">
                <img
                  src={currentBook.imageUrl || bookPlaceholder}
                  alt="Book Cover"
                />

                <div className="modal-content-container">
                  <div className="modal-book-top">
                    <h1>{currentBook.title}</h1>

                    <p>
                      {currentBook.authors.map((author, i) =>
                        currentBook.authors.length === i + 1
                          ? `${author}`
                          : `${author}, `
                      )}
                    </p>
                  </div>

                  <div className="modal-book-middle">
                    <h4>INFORMAÇÕES</h4>

                    <div className="modal-book-info">
                      <span>Páginas</span>
                      <span>{currentBook.pageCount} páginas</span>
                    </div>

                    <div className="modal-book-info">
                      <span>Editora</span>
                      <span>{currentBook.publisher}</span>
                    </div>

                    <div className="modal-book-info">
                      <span>Idioma</span>
                      <span>{currentBook.language}</span>
                    </div>

                    <div className="modal-book-info">
                      <span>Título Original</span>
                      <span>{currentBook.title}</span>
                    </div>

                    <div className="modal-book-info">
                      <span>ISBN-10</span>
                      <span>{currentBook.isbn10}</span>
                    </div>

                    <div className="modal-book-info">
                      <span>ISBN-13</span>
                      <span>{currentBook.isbn13}</span>
                    </div>
                  </div>

                  <div className="modal-book-bottom">
                    <h4>RESENHA DA EDITORA</h4>
                    <p>
                      <i
                        className="fas fa-quote-left"
                        style={{ fontSize: "20px", marginRight: "8px" }}
                      />
                      {currentBook.description}...
                    </p>
                  </div>
                </div>
              </div>
            </Modalr>
          )}
        </div>
      </Loader>
    )
  );
};

export default Home;