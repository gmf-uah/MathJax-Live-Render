# MathJax-Live-Render

A live LaTeX/MathJax renderer that watches a text file and displays it in a browser with automatic refresh. Perfect for editing LaTeX documents in Vim (or any text editor) while seeing the rendered output in real-time.

## Features

- 🔄 **Auto-refresh**: Automatically detects changes to your text file
- 📐 **LaTeX Rendering**: Renders inline and display math using MathJax
- 🎯 **Simple Setup**: Just edit a text file and view it in your browser
- ⚡ **Fast**: Updates within 1 second of file changes
- 🖥️ **Split Screen**: Works perfectly with Vim on left, browser on right

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/gmf-uah/MathJax-Live-Render.git
   cd MathJax-Live-Render
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Quick Start

1. Start the server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

3. Open `content.txt` in your favorite text editor (e.g., Vim):
   ```bash
   vim content.txt
   ```

4. Edit the file and save - the browser will automatically refresh!

### LaTeX Syntax

The viewer supports both inline and display math:

**Inline Math** (use `$...$` or `\(...\)`):
```
The quadratic formula is $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$.
```

**Display Math** (use `$$...$$` or `\[...\]`):
```
$$\int x \, dx = \frac{x^2}{2} + C$$
```

**Matrices**:
```
$$A = \begin{bmatrix}
a & b \\
c & d
\end{bmatrix}$$
```

### Recommended Workflow

For the best experience, arrange your workspace:
- **Left side**: Vim (or your preferred editor) editing `content.txt`
- **Right side**: Browser showing `http://localhost:8080`

Any changes you save in the text editor will appear in the browser within 1 second.

## Configuration

### Change Port

Edit `server.js` and modify the `PORT` constant:
```javascript
const PORT = 8080;  // Change to your preferred port
```

### Change Poll Interval

Edit `viewer.html` and modify the `pollInterval` variable:
```javascript
let pollInterval = 1000;  // Time in milliseconds (default: 1 second)
```

### Customize LaTeX Delimiters

Edit the MathJax configuration in `viewer.html`:
```javascript
window.MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        // Add more customizations here
    }
};
```

## Technical Details

- **Server**: Simple Node.js HTTP server
- **MathJax**: Uses mathjax-full package for LaTeX rendering
- **Update Detection**: Client-side polling (checks file every second)
- **File Watched**: `content.txt` (you can create multiple HTML viewers for different files)

## Troubleshooting

### Port Already in Use
If port 8080 is already in use, change the port in `server.js` (see Configuration).

### Browser Not Updating
- Make sure you're saving the file (`:w` in Vim)
- Check the browser console for errors
- Verify the server is running

### MathJax Not Rendering
- Ensure you're using proper LaTeX delimiters (`$...$` or `$$...$$`)
- Check the browser console for MathJax errors
- Verify mathjax-full is installed in node_modules

## License

ISC