 

 
# AngularJs Image Renderer

Directive will render images based on different resolution
 

## Getting Started

 * Usage: '{"mobile":"{{imgUrlMob}}","tab":"{{imgUrlTab}}","desktop":"{{imgUrl}}","isInline":true}'
 *     isInline: will put the image and inline
 *     classes: each rendition class will be added
 *     fallback: desktop image is considered
 **/

### Prerequisites

Install AngularCli

```
Give examples
```
Using as a background image- [inline property will be true]
<div img-renditions='{"mobile":"{{bannerImgMob}}","tab":"{{bannerImg}}","desktop":"{{bannerImg}}","isInline":true}'>
</div>

Using as a image (non-background image)- [inline property will be true]
<div img-renditions='{"mobile":"{{bannerImgMob}}","tab":"{{bannerImg}}","desktop":"{{bannerImg}}","isInline":false}'>
</div>

### Installing
Use this attribute directive:
img-renditions='{"mobile":"{{bannerImgMob}}","tab":"{{bannerImg}}","desktop":"{{bannerImg}}","isInline":false}'
  
 
  

## Contributing
    
## Versioning
 
## Authors

* **Farooq Mir** - *Initial work* - [PurpleBooth](https://github.com/farooqmir)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

 
