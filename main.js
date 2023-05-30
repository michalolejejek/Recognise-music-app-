class FileDownload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        file: null
      };
      this.handleDrop = this.handleDrop.bind(this);
      this.handleDownload = this.handleDownload.bind(this);
    }
  
    handleDrop(event) {
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      this.setState({ file });
    }
  
    handleDownload() {
      const { file } = this.state;
      if (file) {
        const url = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = url;
        link.download = file.name;
        link.click();
        URL.revokeObjectURL(url);
      }
    }
  
    render() {
      const { file } = this.state;
      return (
        <div>
          <div
            className="dropzone"
            onDragOver={(event) => event.preventDefault()}
            onDrop={this.handleDrop}
          >
            Przeciągnij plik tutaj lub kliknij, aby go wybrać.
          </div>
          {file && (
            <div className="file-name">
              Wybrany plik: {file.name}
              <br />
              <button onClick={this.handleDownload}>Pobierz</button>
            </div>
          )}
        </div>
      );
    }
  }
  
  ReactDOM.render(<FileDownload />, document.getElementById('root'));
  