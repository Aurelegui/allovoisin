import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Articles from "./Articles";

function ArticlesList({
  setArticleName,
  setPrice,
  setTva,
  articles,
  setEdit,
  setArticle,
  setShowAddArticle,
  responsive,
}) {
  return (
    <div className="bgColor pt-1 mb-2">
      <h1 className="p-2">Mes articles</h1>
      <h5 className="ps-2">{articles <= 0 ? "Ajouter un article" : ""}</h5>
      <ListGroup variant="flush">
        {articles.map((article) => (
          <Articles
            articleName={article.articleName}
            setArticleName={setArticleName}
            price={article.price}
            setPrice={setPrice}
            tva={article.tva}
            setTva={setTva}
            key={article.id}
            total={article.total}
            setEdit={setEdit}
            article={article}
            setArticle={setArticle}
          />
        ))}
        {responsive && (
          <div className="pb-5">
            <Button
              className={`buttonCenter mt-5`}
              onClick={() => {
                setShowAddArticle(true);
              }}
              size="lg"
            >
              Ajouter un Article
            </Button>
          </div>
        )}
      </ListGroup>
    </div>
  );
}

ArticlesList.propTypes = {};

export default ArticlesList;
