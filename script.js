document.addEventListener('DOMContentLoaded', () => {
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });
    
    // Step 2
    let errorButtons = Array.from(document.querySelectorAll('#error-btns > button'));
  
    errorButtons.forEach((button) => {
      button.addEventListener('click', () => {
        switch (button.textContent) {
          case 'Console Log':
            console.log('This is a console log message.');
            break;
          case 'Console Error':
            console.error('This is a console error message.');
            break;
          case 'Console Count':
            console.count('Count');
            break;
          case 'Console Warn':
            console.warn('This is a console warn message.');
            break;
          case 'Console Assert':
            console.assert(false, 'This is a console assert message.');
            break;
          case 'Console Clear':
            console.clear();
            break;
          case 'Console Dir':
            console.dir(document.body);
            break;
          case 'Console dirxml':
            console.dirxml(document);
            break;
          case 'Console Group Start':
            console.group('Console Group');
            break;
          case 'Console Group End':
            console.groupEnd();
            break;
          case 'Console Table':
            console.table([{ a: 1, b: 'Z' }, { a: 2, b: 'Y' }]);
            break;
          case 'Start Timer':
            console.time('Timer');
            break;
          case 'End Timer':
            console.timeEnd('Timer');
            break;
          case 'Console Trace':
            console.trace('This is a console trace.');
            break;
          case 'Trigger a Global Error':
            // Step 3
            try {
            // Frpm instructrions
              aintGonnaWork();
            } catch (error) {
              console.error('Caught a global error:', error);
            }
            break;
        }
      });
    });
  
    // Step 4 Custom error handling
    window.onerror = function (message, source, lineno, colno, error) {
      console.log('Global error caught:', message);
    };
  
    class CustomError extends Error {
      constructor(message) {
        super(message);
        this.name = 'CustomError';
      }
    }
  
    // also step 4
    document.querySelector('#calculate').addEventListener('click', () => {
      try {
        throw new CustomError('This is a custom error.');
      } catch (error) {
        console.error('Caught a custom error:', error);
      } finally {
        console.log('This will always run.');
      }
    });
  });
  