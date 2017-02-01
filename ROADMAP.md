# roadmap

This roadmap is just my ideas for now. 'Advanced page types' I'm already currently working on, so expect these will come out soonest. I know the form builder is a bold idea and is a rabbit hole I could dissapear into for months, so will treat this list as 'inspiration only'. The reality is that I'll update `generator-gf` on a real need basis, as I am currently use it myself on a daily basis. I'm not going to build anything unless I need it, which will result in some odd omissions (from your perspective) since I'm not building a general tool, it's very specific to my needs. (of course, volunteers welcome ;-D )


## advanced page types

* I will be updating `gf` with additional sub types using a dot notation, e.g.
 - `i2.list` (for infinite scroll list with pull to refresh)
 - `i2.listform` (list and an edit form) Very basic page structure, just the plumbing.
* Advanced sub type generators will end with `.q`. This will result in a few Q & A type generator questions (in the shell) allowing you to customise the generated pages using the traditional `yo` wizard style. 
 - `i2.list.q` 
 
## form builders

- `i2.listform.q` (very simple list and form builder, with options to specify fields and types
 - for example : Name\*, Surname\*, Age0\*, Email@\*, BDay? 
  - \* : required
  - 0 : number
  - ? : date
- If the files already exist, they won't be overwritten. If you want to regenerate the starter pages, you'll need to delete the pages and start over.