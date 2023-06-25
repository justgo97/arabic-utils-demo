import "./App.scss";

// Import all of Bootstrap's JS
import "bootstrap";

import Navbar from "./components/Navbar";
import { Fragment, useState } from "react";
import { ArabicString, IMatch } from "arabic-utils";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="pt-5">
          <h3>1. Getting started</h3>
          <p>
            arabic-utils is an NPM package designed for use in both browser and
            Node environments. It offers a range of convenient utilities
            specifically tailored for Arabic string manipulation, including
            functionalities like token search, removing diacritics and more.
          </p>
          <p>
            Installation command:{" "}
            <span className="bg-light-subtle rounded">
              npm install arabic-utils
            </span>
          </p>
          <p>
            Check out the package{" "}
            <a
              href="https://github.com/justgo97/arabic-utils"
              target="_blank"
              rel="noreferrer"
            >
              Github repository
            </a>{" "}
            for more informations.
          </p>
          <h3>2. Demos</h3>
          <ExampleNormalize />

          <br />
          <Example />
          <br />
        </div>
      </div>
      <footer className="text-center bg-body-tertiary px-2">
        <span>
          <a
            className="text-decoration-none fs-1"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/justgo97/arabic-utils"
          >
            <i className="devicon-github-original-wordmark colored"></i>
          </a>
        </span>
      </footer>
    </div>
  );
};

const targetText =
  "هَـٰذَا النص يحاكي أنماط كتابة مختلفة وفيه كلمات مٌشَكَّلَة وغير مشكّلة، وكلمات قصيرة وطويـــــــــــــــــــــــــلة وهو نص قابل للتعديل ( إستخدم الزر في الأسفل ). ";

const ExampleNormalize = () => {
  const [ignoreDiacritics, setIgnoreDiacritics] = useState(true);
  const [normalizeAlef, setNormalizeAlef] = useState(true);
  const [removeSuperscriptAlef, setRemoveSuperscriptAlef] = useState(false);
  const [removeTatweel, setRemoveTatweel] = useState(true);
  const [normalizeSF, setNormalizeSF] = useState(true);
  const [inputText, setInputText] = useState(targetText);
  const [editable, setEditable] = useState(false);

  const handleOnChangeDiacritics = () => {
    setIgnoreDiacritics(!ignoreDiacritics);
  };

  const handleOnChangeNormAlef = () => {
    setNormalizeAlef(!normalizeAlef);
  };

  const handleOnChangeNormSF = () => {
    setNormalizeSF(!normalizeSF);
  };

  const handleOnChangeRemoveSF = () => {
    setRemoveSuperscriptAlef(!removeSuperscriptAlef);
  };

  const handleOnChangeRemoveTatweel = () => {
    setRemoveTatweel(!removeTatweel);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const normalizedText = ArabicString(inputText).normalize({
    removeDiacritics: ignoreDiacritics,
    normalizeAlef: normalizeAlef,
    removeSuperscriptAlef: removeSuperscriptAlef,
    removeTatweel: removeTatweel,
    normalizeSuperscripAlef: normalizeSF,
  });

  return (
    <>
      <h5 className="">2.1 normalize</h5>
      <p>
        Normalize the Arabic text based on the specified options or the default
        options.
      </p>
      <div className="text-secondary">Options:</div>
      <Checkbox
        value={normalizeAlef}
        label="Normalize Alef"
        inputID="fieldNormAlef"
        handleOnChange={handleOnChangeNormAlef}
      />

      <Checkbox
        value={normalizeSF}
        label="Normalize Superscript Alef"
        inputID="fieldNormSF"
        handleOnChange={handleOnChangeNormSF}
      />

      <Checkbox
        value={ignoreDiacritics}
        label="Remove Diacritics"
        inputID="fieldDiacritics"
        handleOnChange={handleOnChangeDiacritics}
      />

      <Checkbox
        value={removeSuperscriptAlef}
        label="Remove Superscript Alef"
        inputID="fieldRemoveSF"
        handleOnChange={handleOnChangeRemoveSF}
      />

      <Checkbox
        value={removeTatweel}
        label="Remove Tatweel"
        inputID="fieldRemoveTatweel"
        handleOnChange={handleOnChangeRemoveTatweel}
      />
      <h6>Before:</h6>
      <div className="card">
        <div className="card-header">Example text</div>
        <div className="card-body fs-5" dir="rtl">
          {editable ? (
            <>
              <textarea
                className="form-control"
                value={inputText}
                onChange={onChangeInput}
              />
            </>
          ) : (
            inputText
          )}
        </div>
        <div className="card-footer text-center">
          {editable ? (
            <button
              className="btn btn-success"
              onClick={() => setEditable(false)}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setEditable(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
      <h6>After:</h6>
      <div className="card">
        <div className="card-header">Normalized text</div>
        <div className="card-body fs-5" dir="rtl">
          {normalizedText}
        </div>
      </div>
    </>
  );
};

const Example = () => {
  const [searchToken, setSearchToken] = useState("هذا");
  const [ignoreDiacritics, setIgnoreDiacritics] = useState(true);
  const [matchIdentical, setMatchIdentical] = useState(false);
  const [normalizeAlef, setNormalizeAlef] = useState(true);
  const [removeSuperscriptAlef, setRemoveSuperscriptAlef] = useState(false);
  const [removeTatweel, setRemoveTatweel] = useState(true);
  const [normalizeSF, setNormalizeSF] = useState(true);
  const [inputText, setInputText] = useState(targetText);
  const [editable, setEditable] = useState(false);

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchToken(e.target.value);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleOnChangeDiacritics = () => {
    setIgnoreDiacritics(!ignoreDiacritics);
  };

  const handleOnChangeIdentical = () => {
    setMatchIdentical(!matchIdentical);
  };

  const handleOnChangeNormAlef = () => {
    setNormalizeAlef(!normalizeAlef);
  };

  const handleOnChangeNormSF = () => {
    setNormalizeSF(!normalizeSF);
  };

  const handleOnChangeRemoveSF = () => {
    setRemoveSuperscriptAlef(!removeSuperscriptAlef);
  };

  const handleOnChangeRemoveTatweel = () => {
    setRemoveTatweel(!removeTatweel);
  };

  const normalizedToken = ArabicString(searchToken).normalize({
    removeDiacritics: ignoreDiacritics,
    normalizeAlef: normalizeAlef,
    removeSuperscriptAlef: removeSuperscriptAlef,
    removeTatweel: removeTatweel,
    normalizeSuperscripAlef: normalizeSF,
  });

  const partMatches = ArabicString(inputText, {
    removeDiacritics: ignoreDiacritics,
    removeSuperscriptAlef: removeSuperscriptAlef,
    removeTatweel: removeTatweel,
    normalizeAlef: normalizeAlef,
    normalizeSuperscripAlef: normalizeSF,
  }).getMatches(normalizedToken, { matchIdentical: matchIdentical });

  return (
    <div>
      <h5>2.2 getMatches</h5>
      <p>
        Retrieves the matched parts from the given Arabic text based on the
        search token.
      </p>
      <div>
        <div className="text-secondary">Search token:</div>
        <input
          onChange={onChangeSearch}
          value={searchToken}
          type="text"
          dir="rtl"
          className="form-control"
        />
      </div>
      <div className="text-secondary">Options:</div>
      <Checkbox
        value={matchIdentical}
        label="Match identical"
        inputID="fieldIdentical2"
        handleOnChange={handleOnChangeIdentical}
      />

      <Checkbox
        value={normalizeAlef}
        label="Normalize Alef"
        inputID="fieldNormAlef2"
        handleOnChange={handleOnChangeNormAlef}
      />

      <Checkbox
        value={normalizeSF}
        label="Normalize Superscript Alef"
        inputID="fieldNormSF2"
        handleOnChange={handleOnChangeNormSF}
      />

      <Checkbox
        value={ignoreDiacritics}
        label="Ignore Diacritics"
        inputID="fieldDiacritics2"
        handleOnChange={handleOnChangeDiacritics}
      />

      <Checkbox
        value={removeSuperscriptAlef}
        label="Ignore Superscript Alef"
        inputID="fieldRemoveSF2"
        handleOnChange={handleOnChangeRemoveSF}
      />

      <Checkbox
        value={removeTatweel}
        label="Ignore Tatweel"
        inputID="fieldRemoveTatweel2"
        handleOnChange={handleOnChangeRemoveTatweel}
      />

      <div className="card" dir="auto">
        <div className="card-header">
          Example text
          <div className="fs-6 text-secondary text-">
            Matches found:{" "}
            {partMatches
              ? partMatches.filter((part) => part.isMatch).length
              : 0}
          </div>
        </div>
        <div className="card-body fs-5" dir="rtl">
          {editable ? (
            <>
              <textarea
                className="form-control"
                value={inputText}
                onChange={onChangeInput}
              />
            </>
          ) : (
            <>
              {partMatches ? (
                <TextHighlighter textParts={partMatches} />
              ) : (
                inputText
              )}
            </>
          )}
        </div>
        <div className="card-footer text-center">
          {editable ? (
            <button
              className="btn btn-success"
              onClick={() => setEditable(false)}
            >
              Save
            </button>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setEditable(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

interface TextHighlighterProps {
  textParts: IMatch[];
}

const TextHighlighter = ({ textParts }: TextHighlighterProps) => {
  return (
    <>
      {textParts.map((part, index) => (
        <Fragment key={index}>
          {part.isMatch ? <mark>{part.text}</mark> : part.text}
        </Fragment>
      ))}
    </>
  );
};

interface CheckboxProps {
  value: boolean;
  label: string;
  inputID: string;
  handleOnChange: () => void;
}

const Checkbox = ({ value, label, inputID, handleOnChange }: CheckboxProps) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={inputID}
        checked={value}
        onChange={handleOnChange}
      />
      <label className="form-check-label" htmlFor={inputID}>
        {label}
      </label>
    </div>
  );
};

export default App;
