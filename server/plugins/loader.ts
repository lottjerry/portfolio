export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', (html) => {

    html.head.push(`
      <style>
        html, body {
          background: #0f172a !important;
          margin: 0;
          padding: 0;
        }
      </style>
    `);


    html.bodyAppend.push(`
      <div id="initial-loader" style="
        position: fixed;
        inset: 0;
        background: #0f172a;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        font-family: 'Timmons NY', serif;
        transition: transform .6s cubic-bezier(.85,0,.15,1);
      ">

        <div id="loader-count" style="
          color: white;
          font-size: 8rem;
        ">
          000
        </div>

      </div>


      <script>
        (function(){

          let progress = 0;
          let appReady = false;

          const count =
            document.getElementById('loader-count');


          // exposed for app.vue
          window.__finishLoader = function(){

            appReady = true;

          };


          const timer = setInterval(()=>{


            if(!appReady){

              // Fast loading animation
              if(progress < 95){

                progress += 3;

              }

              // Hold at 95 while app loads
              else {

                progress = 95;

              }


            } 
            else {


              // App is ready, finish smoothly

              progress += 2;


              if(progress >= 100){

                progress = 100;

                clearInterval(timer);


                setTimeout(()=>{

                  const loader =
                    document.getElementById('initial-loader');


                  if(loader){

                    loader.style.transform =
                      'translateY(-100vh)';


                    setTimeout(()=>{

                      loader.remove();

                    },600);

                  }


                },200);

              }


            }


            if(count){

              count.textContent =
                String(progress).padStart(3,'0');

            }


          },20);


        })();
      </script>
    `);

  });
});