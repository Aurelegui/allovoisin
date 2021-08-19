import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
// import Articles from "./Articles";

function Edit({
  articleName,
  setArticleName,
  price,
  setPrice,
  tva,
  setTva,
  articles,
  setArticles,
  total,
  setTotal,
  setEdit,
  article,
  setArticle,
}) {
  // console.log(article);
  const inputNameArticleHandler = (e) => {
    setArticleName(e.target.value);
  };

  // gere le prix unitaire HT
  const inputPriceHandler = (e) => {
    // test if value is !number
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setPrice(e.target.value);
    }
  };

  // Gere TVA en %
  const inputTvaHandler = (e) => {
    // test if value is !number
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setTva(e.target.value);
    }
  };

  // Calcul total price TTC
  if (tva) {
    const totalReduc = (price / 100) * tva;
    const total = price - totalReduc;
    setTotal(parseFloat(total));
  }

  const editArticle = (e) => {
    console.log(article);
    e.preventDefault();
    setArticles(
      articles.map((el) => {
        const validArticleName = articleName.replace(/\s/g, "").length;
        if (
          validArticleName &&
          validArticleName !== el.articleName &&
          price &&
          tva &&
          total
        ) {
          if (el.id === article.id) {
            return {
              ...el,
              articleName: articleName,
              tva: tva,
              total: total,
              price: price,
            };
          }
        }
        console.log(el);
        return el;
      })
    );
    setEdit(false);
    setArticleName("");
    setPrice("");
    setTva("");
    setTotal("");
    alert("article mis a jour");
  };
  return (
    <Form>
      <h1>Éditer un article</h1>
      <Form.Group
        bg="primary"
        as={Col}
        className="mb-3"
        controlId="formAddArticle"
      >
        <FloatingLabel
          controlId="floatingInput"
          placeholder="Nom de l'article"
          label="Nom de l'article"
          className="mb-3"
        >
          {/* Nom de l'article */}
          <Form.Control
            onChange={inputNameArticleHandler}
            // value={article.articleName}
            type="text"
            placeholder={article.articleName}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          placeholder="Nom de l'article"
          label="Prix unitaire HT"
          className="mb-3"
        >
          {/* Prix unitaire HT */}
          <Form.Control
            onChange={inputPriceHandler}
            type="text"
            placeholder={article.price}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          placeholder="TVA en %"
          label="TVA en %"
          className="mb-3"
        >
          {/* TVA en % */}
          <Form.Control
            onChange={inputTvaHandler}
            type="text"
            placeholder={article.tva}
            maxLength={2}
          />
        </FloatingLabel>
        <Row>
          <Col xs={6}>
            <h5>Prix total TTC</h5>
          </Col>
          <Col className="alignText" xs={6}>
            <h5>{total ? total : 0} €</h5>
          </Col>
        </Row>
        <Button
          className={`buttonCenter mt-5 ${
            articleName && price && tva ? "" : "disabled"
          }`}
          onClick={editArticle}
          // variant="primary"
          size="lg"
        >
          Enregistrer l'article
        </Button>
      </Form.Group>
    </Form>
  );
}

Edit.propTypes = {};

export default Edit;
