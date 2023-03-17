remote:
To github.com:jenagansivakumar/first_project.git
 * [new branch]      homepage -> homepage
branch 'homepage' set up to track 'origin/homepage'.
➜  projects-spiced git:(homepage) ls
assets     index.html project_1  styles.css
➜  projects-spiced git:(homepage) ✗ code .
➜  projects-spiced git:(homepage) ✗ git status
On branch homepage
Your branch is up to date with 'origin/homepage'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   index.html
	modified:   styles.css

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(homepage) ✗ git add .
➜  projects-spiced git:(homepage) ✗ git add .
➜  projects-spiced git:(homepage) ✗ git commit -m "added navbar, and began first
 question spacing"
[homepage 1f09d25] added navbar, and began first question spacing
 2 files changed, 46 insertions(+), 7 deletions(-)
➜  projects-spiced git:(homepage) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 10 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 1.12 KiB | 1.12 MiB/s, done.
Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:jenagansivakumar/first_project.git
   39b21f6..1f09d25  homepage -> homepage
➜  projects-spiced git:(homepage) git add .
➜  projects-spiced git:(homepage) ✗ git commit -m "added box around first questi
on"
[homepage 986f22d] added box around first question
 2 files changed, 8 insertions(+), 4 deletions(-)
➜  projects-spiced git:(homepage) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 10 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 494 bytes | 494.00 KiB/s, done.
Total 4 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:jenagansivakumar/first_project.git
   1f09d25..986f22d  homepage -> homepage
➜  projects-spiced git:(homepage) git add .
➜  projects-spiced git:(homepage) ✗ git commit -m "added bookmark img, and centr
ed it"
[homepage 9ba17eb] added bookmark img, and centred it
 2 files changed, 61 insertions(+), 21 deletions(-)
➜  projects-spiced git:(homepage) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Received disconnect from 140.82.121.3 port 22:11: Bye Bye
Disconnected from 140.82.121.3 port 22
fatal: Could not read from remote repository.

Please make sure you have the correct access rights
and the repository exists.
➜  projects-spiced git:(homepage) ✗ git add .
➜  projects-spiced git:(homepage) ✗ git status
On branch homepage
Your branch is ahead of 'origin/homepage' by 1 commit.
  (use "git push" to publish your local commits)

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   index.html
	modified:   styles.css

➜  projects-spiced git:(homepage) ✗ git commit -m "added fixed navbar"
[homepage f294a81] added fixed navbar
 2 files changed, 50 insertions(+), 8 deletions(-)
➜  projects-spiced git:(homepage) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 10 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 1.86 KiB | 1.86 MiB/s, done.
Total 8 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To github.com:jenagansivakumar/first_project.git
   986f22d..f294a81  homepage -> homepage
➜  projects-spiced git:(homepage) git status
On branch homepage
Your branch is up to date with 'origin/homepage'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   styles.css

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(homepage) ✗ git add .
➜  projects-spiced git:(homepage) ✗ git commit -m "changed colour of footer"
[homepage aa9b419] changed colour of footer
 1 file changed, 3 insertions(+), 3 deletions(-)
➜  projects-spiced git:(homepage) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 10 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 358 bytes | 358.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
To github.com:jenagansivakumar/first_project.git
   f294a81..aa9b419  homepage -> homepage
➜  projects-spiced git:(homepage) ls
assets     index.html project_1  styles.css
➜  projects-spiced git:(homepage) cd project_1
➜  project_1 git:(homepage) ls
➜  project_1 git:(homepage) ..
➜  projects-spiced git:(homepage) ls
assets     index.html project_1  styles.css
➜  projects-spiced git:(homepage) ..
➜  spiced-bootcamp cd projects-spiced
➜  projects-spiced git:(homepage) ls
assets     index.html project_1  styles.css
➜  projects-spiced git:(homepage) touch bookmarks.html
➜  projects-spiced git:(homepage) ✗ ls
assets         bookmarks.html index.html     project_1      styles.css
➜  projects-spiced git:(homepage) ✗ git add .
➜  projects-spiced git:(homepage) ✗ git commit -m "created bookmarks.html"
[homepage 17eea19] created bookmarks.html
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 bookmarks.html
➜  projects-spiced git:(homepage) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 10 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 360 bytes | 360.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:jenagansivakumar/first_project.git
   aa9b419..17eea19  homepage -> homepage
➜  projects-spiced git:(homepage) code .
➜  projects-spiced git:(homepage) git status
On branch homepage
Your branch is up to date with 'origin/homepage'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html
	modified:   styles.css

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(homepage) ✗ git add .
➜  projects-spiced git:(homepage) ✗ git commit -m "added bookmark tab and made s
ome colour changes"
[homepage 99288cc] added bookmark tab and made some colour changes
 3 files changed, 87 insertions(+), 20 deletions(-)
➜  projects-spiced git:(homepage) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 10 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 1.04 KiB | 1.04 MiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 2 local objects.
To github.com:jenagansivakumar/first_project.git
   17eea19..99288cc  homepage -> homepage
➜  projects-spiced git:(homepage) git add .
➜  projects-spiced git:(homepage) ✗ git commit -m "
dquote> git commit -m "colour changes"
dquote>
dquote>
dquote>
dquote>
dquote>
dquote>
dquote> cd
dquote> ..
dquote> kahlsg
dquote> akgjlakg "
error: pathspec 'changes






cd
..
kahlsg
akgjlakg ' did not match any file(s) known to git
➜  projects-spiced git:(homepage) ✗ git status
On branch homepage
Your branch is up to date with 'origin/homepage'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   bookmarks.html
	modified:   index.html
	modified:   styles.css

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html
	modified:   styles.css

➜  projects-spiced git:(homepage) ✗ git add .
➜  projects-spiced git:(homepage) ✗ git commit -m "added colours"
[homepage efa63df] added colours
 3 files changed, 39 insertions(+), 11 deletions(-)
➜  projects-spiced git:(homepage) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 10 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (5/5), 744 bytes | 744.00 KiB/s, done.
Total 5 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 2 local objects.
To github.com:jenagansivakumar/first_project.git
   99288cc..efa63df  homepage -> homepage
➜  projects-spiced git:(homepage) ls
assets         bookmarks.html index.html     project_1      styles.css
➜  projects-spiced git:(homepage) git switch -c profile.html
Switched to a new branch 'profile.html'
➜  projects-spiced git:(profile.html) ls
assets         bookmarks.html index.html     project_1      styles.css
➜  projects-spiced git:(profile.html) touch profile.html
➜  projects-spiced git:(profile.html) ✗ git add .
➜  projects-spiced git:(profile.html) ✗ git commit -m "added new branch with profile.html"
[profile.html 74ae291] added new branch with profile.html
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 profile.html
➜  projects-spiced git:(profile.html) ls
assets         bookmarks.html index.html     profile.html   project_1      styles.css
➜  projects-spiced git:(profile.html) code .
➜  projects-spiced git:(profile.html) git status
On branch profile.html
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   profile.html
	modified:   styles.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	images/

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ git add .
➜  projects-spiced git:(profile.html) ✗ git commit -m "created profile page"
[profile.html f29aae5] created profile page
 5 files changed, 48 insertions(+), 1 deletion(-)
 create mode 100644 images/Nic Cage.jpeg
 create mode 100644 images/eiffel.jpeg
➜  projects-spiced git:(profile.html) git push
fatal: The current branch profile.html has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin profile.html

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

➜  projects-spiced git:(profile.html)    git push --set-upstream origin profile.html
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 10 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (11/11), 13.14 KiB | 13.14 MiB/s, done.
Total 11 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote:
remote: Create a pull request for 'profile.html' on GitHub by visiting:
remote:      https://github.com/jenagansivakumar/first_project/pull/new/profile.html
remote:
To github.com:jenagansivakumar/first_project.git
 * [new branch]      profile.html -> profile.html
branch 'profile.html' set up to track 'origin/profile.html'.
➜  projects-spiced git:(profile.html) git add .
➜  projects-spiced git:(profile.html) ✗ git commit -m "creating a counter on profile page"
[profile.html e038259] creating a counter on profile page
 2 files changed, 19 insertions(+), 10 deletions(-)
➜  projects-spiced git:(profile.html) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 10 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (4/4), 569 bytes | 569.00 KiB/s, done.
Total 4 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To github.com:jenagansivakumar/first_project.git
   f29aae5..e038259  profile.html -> profile.html
➜  projects-spiced git:(profile.html) ls
assets         bookmarks.html images         index.html     profile.html   project_1      styles.css
➜  projects-spiced git:(profile.html) git switch main
fatal: invalid reference: main
➜  projects-spiced git:(profile.html) git branch
➜  projects-spiced git:(profile.html)
➜  projects-spiced git:(profile.html) git switch project_1
Switched to branch 'project_1'
Your branch is up to date with 'origin/project_1'.
➜  projects-spiced git:(project_1) git switch profile.html
Switched to branch 'profile.html'
Your branch is up to date with 'origin/profile.html'.
➜  projects-spiced git:(profile.html) touch index.js
➜  projects-spiced git:(profile.html) ✗ ls
assets         bookmarks.html images         index.html     index.js       profile.html   project_1      styles.css
➜  projects-spiced git:(profile.html) ✗ git add .
➜  projects-spiced git:(profile.html) ✗ git commit -m "added js page"
[profile.html 42037a8] added js page
 5 files changed, 27 insertions(+), 6 deletions(-)
 create mode 100644 index.js
➜  projects-spiced git:(profile.html) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 25, done.
Counting objects: 100% (25/25), done.
Delta compression using up to 10 threads
Compressing objects: 100% (20/20), done.
Writing objects: 100% (21/21), 14.29 KiB | 7.15 MiB/s, done.
Total 21 (delta 10), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (10/10), completed with 4 local objects.
remote:
remote: Create a pull request for 'profile.html' on GitHub by visiting:
remote:      https://github.com/jenagansivakumar/first_project/pull/new/profile.html
remote:
To github.com:jenagansivakumar/first_project.git
 * [new branch]      profile.html -> profile.html
➜  projects-spiced git:(profile.html) echo .DS_Store >> ~/.gitignore_global
git config --global core.excludesFile '~/.gitignore_global'
➜  projects-spiced git:(profile.html) ✗ git status
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html
	modified:   profile.html

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ git status
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html
	modified:   profile.html

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ touch .DS_Store
➜  projects-spiced git:(profile.html) ✗ git status
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html
	modified:   profile.html

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ touch .DS_Storex
➜  projects-spiced git:(profile.html) ✗ git status
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html
	modified:   profile.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.DS_Storex

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ rm .DS_Store profile.html
➜  projects-spiced git:(profile.html) ✗ rm .DS_Storex
➜  projects-spiced git:(profile.html) ✗ git status
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html
	deleted:    profile.html

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ git restore profile.html
➜  projects-spiced git:(profile.html) ✗ git status
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ type gs
gs not found
➜  projects-spiced git:(profile.html) ✗ git status
diff --git a/profile.html b/profile.html
index e64142d..b72f96b 100644
--- a/profile.html
+++ b/profile.html
@@ -5,26 +5,32 @@
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
-    <title>Document</title>
+    <title>Profile Page</title>
 </head>
 <body>
     <header>
       <h1>QUIZ APP</h1>
       <h2 class="page_title">Profile</h2> <br>
-        <section class="picture_name">
-            <h2>Nicolas Cage</h2>
+           <section class="picture_name">
+      <h2>Nicolas Cage</h2>
             <img src="images/Nic Cage.jpeg" width=" 300" alt="">
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ git status
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	modified:   index.html
	modified:   profile.html

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ git diff profile.html
fatal: ambiguous argument 'profile.html': both revision and filename
Use '--' to separate paths from revisions, like this:
'git <command> [<revision>...] -- [<file>...]'
➜  projects-spiced git:(profile.html) ✗ git diff -- profile.html
➜  projects-spiced git:(profile.html) ✗ git status
On branch profile.html
Your branch is up to date with 'origin/profile.html'.

Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   bookmarks.html
	deleted:    images/Nic Cage.jpeg
	modified:   index.html
	modified:   index.js
	modified:   profile.html
	modified:   styles.css

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	images/download (1).jpeg
	styles bookmark.css
	styles home.css
	styles profile.css

no changes added to commit (use "git add" and/or "git commit -a")
➜  projects-spiced git:(profile.html) ✗ git add .
➜  projects-spiced git:(profile.html) ✗ git commit -m "added new questions"
[profile.html 194c0fa] added new questions
 9 files changed, 564 insertions(+), 67 deletions(-)
 rename images/{Nic Cage.jpeg => download (1).jpeg} (100%)
 create mode 100644 styles bookmark.css
 create mode 100644 styles home.css
 create mode 100644 styles profile.css
➜  projects-spiced git:(profile.html) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 14, done.
Counting objects: 100% (14/14), done.
Delta compression using up to 10 threads
Compressing objects: 100% (7/7), done.
Writing objects: 100% (8/8), 1.98 KiB | 1.98 MiB/s, done.
Total 8 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To github.com:jenagansivakumar/first_project.git
   42037a8..194c0fa  profile.html -> profile.html
➜  projects-spiced git:(profile.html) ..
➜  spiced-bootcamp ls
challenge-spiced projects-spiced  savory-web-dev   session-notebook
➜  spiced-bootcamp cd session-notebook
➜  session-notebook git:(Responsive_CSS) ✗ ls
README.md     css           css.example   directory     directory.md  gitcheats     html          index.md      javascript    shell-and-git
➜  session-notebook git:(Responsive_CSS) ✗ git add .
➜  session-notebook git:(Responsive_CSS) ✗ git commit -m "added border"
[Responsive_CSS df0504f] added border
 9 files changed, 268 insertions(+)
 create mode 100644 css.example/css.html
 create mode 100644 css/CSS_structures/CSS-structure.html
 create mode 100644 css/CSS_structures/CSS/bem.css
 create mode 100644 css/CSS_structures/CSS/style.css
 create mode 100644 css/CSS_structures/CSS/variables.css
 create mode 100644 css/Responsive_CSS/index.html
 create mode 100644 css/Responsive_CSS/style.css
 create mode 100644 css/css_positioning/css_positioning
 create mode 100644 css/css_positioning/index.html
➜  session-notebook git:(Responsive_CSS) git push
fatal: The current branch Responsive_CSS has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin Responsive_CSS

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

➜  session-notebook git:(Responsive_CSS)   git push --set-upstream origin Responsive_CSS

Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 16, done.
Counting objects: 100% (16/16), done.
Delta compression using up to 10 threads
Compressing objects: 100% (13/13), done.
Writing objects: 100% (14/14), 3.45 KiB | 3.45 MiB/s, done.
Total 14 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'Responsive_CSS' on GitHub by visiting:
remote:      https://github.com/jenagansivakumar/session-notebook/pull/new/Responsive_CSS
remote:
To github.com:jenagansivakumar/session-notebook.git
 * [new branch]      Responsive_CSS -> Responsive_CSS
branch 'Responsive_CSS' set up to track 'origin/Responsive_CSS'.
➜  session-notebook git:(Responsive_CSS) git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
➜  session-notebook git:(main) ls
README.md     css           css.example   directory     directory.md  gitcheats     html          index.md      javascript    shell-and-git
➜  session-notebook git:(main) cd css
➜  css git:(main) ls
camp               code               css_basics         css_button_styles  css_code_camp.html css_positioning    index.html         style.css
➜  css git:(main) mkdir css grid
➜  css git:(main) ls
camp               css                css_button_styles  css_positioning    index.html
code               css_basics         css_code_camp.html grid               style.css
➜  css git:(main) cd grid
➜  grid git:(main) ls
➜  grid git:(main) touch grid.text
➜  grid git:(main) ✗ code .
➜  grid git:(main) ✗ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	./

nothing added to commit but untracked files present (use "git add" to track)
➜  grid git:(main) ✗ git branch
➜  grid git:(main) ✗ git switch -c css_grid
Switched to a new branch 'css_grid'
➜  grid git:(css_grid) ✗ npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-grid/image-gallery


🔗 spicedacademy/fs-web-exercises (main)
📂 sessions/css-grid/image-gallery

📥 downloading files...
🔑 using GitHub API with token
████████████████████████████████████████ ┈ 100% ┈ 1.29 MB of 1.29 MB transferred

📂 created css-grid_image-gallery

✅ done
👉 use cd css-grid_image-gallery to enter the directory

➜  grid git:(css_grid) ✗ ls
css-grid_image-gallery grid.text
➜  grid git:(css_grid) ✗ code .
➜  grid git:(css_grid) ✗ git status
On branch css_grid
Untracked files:
  (use "git add <file>..." to include in what will be committed)
	./

nothing added to commit but untracked files present (use "git add" to track)
➜  grid git:(css_grid) ✗ git switch -c place_the_elements
Switched to a new branch 'place_the_elements'
➜  grid git:(place_the_elements) ✗ ls
css-grid_image-gallery grid.text
➜  grid git:(place_the_elements) ✗ npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-grid/place-elements


🔗 spicedacademy/fs-web-exercises (main)
📂 sessions/css-grid/place-elements

📥 downloading files...
🔑 using GitHub API with token
████████████████████████████████████████ ┈ 100% ┈ 150 kB of 150 kB transferred

📂 created css-grid_place-elements

✅ done
👉 use cd css-grid_place-elements to enter the directory

➜  grid git:(place_the_elements) ✗ ls
css-grid_image-gallery  css-grid_place-elements grid.text
➜  grid git:(place_the_elements) ✗ code .
➜  grid git:(place_the_elements) ✗ git add .
➜  grid git:(place_the_elements) ✗ git commit -m "finished place the elements challenge"
[place_the_elements 21025a5] finished place the elements challenge
 18 files changed, 350 insertions(+)
 create mode 100644 css/grid/.vscode/settings.json
 create mode 100644 css/grid/css-grid_image-gallery/.gitignore
 create mode 100644 css/grid/css-grid_image-gallery/.prettierrc.json
 create mode 100644 css/grid/css-grid_image-gallery/README.md
 create mode 100644 css/grid/css-grid_image-gallery/assets/grid-challenge_image-gallery.png
 create mode 100644 css/grid/css-grid_image-gallery/css/styles.css
 create mode 100644 css/grid/css-grid_image-gallery/index.html
 create mode 100644 css/grid/css-grid_image-gallery/package.json
 create mode 100644 css/grid/css-grid_image-gallery/sandbox.config.json
 create mode 100644 css/grid/css-grid_place-elements/.gitignore
 create mode 100644 css/grid/css-grid_place-elements/.prettierrc.json
 create mode 100644 css/grid/css-grid_place-elements/README.md
 create mode 100644 css/grid/css-grid_place-elements/assets/grid-challenge_place-elements.png
 create mode 100644 css/grid/css-grid_place-elements/css/styles.css
 create mode 100644 css/grid/css-grid_place-elements/index.html
 create mode 100644 css/grid/css-grid_place-elements/package.json
 create mode 100644 css/grid/css-grid_place-elements/sandbox.config.json
 create mode 100644 css/grid/grid.text
➜  grid git:(place_the_elements) git push
fatal: The current branch place_the_elements has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin place_the_elements

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

➜  grid git:(place_the_elements)     git push --set-upstream origin place_the_elements
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 25, done.
Counting objects: 100% (25/25), done.
Delta compression using up to 10 threads
Compressing objects: 100% (19/19), done.
Writing objects: 100% (23/23), 1.36 MiB | 2.14 MiB/s, done.
Total 23 (delta 4), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (4/4), completed with 2 local objects.
remote:
remote: Create a pull request for 'place_the_elements' on GitHub by visiting:
remote:      https://github.com/jenagansivakumar/session-notebook/pull/new/place_the_elements
remote:
To github.com:jenagansivakumar/session-notebook.git
 * [new branch]      place_the_elements -> place_the_elements
branch 'place_the_elements' set up to track 'origin/place_the_elements'.
➜  grid git:(place_the_elements) ..
➜  css git:(place_the_elements) ls
camp               css                css_button_styles  css_positioning    index.html
code               css_basics         css_code_camp.html grid               style.css
➜  css git:(place_the_elements) cd grid
➜  grid git:(place_the_elements) ls
css-grid_image-gallery  css-grid_place-elements grid.text
➜  grid git:(place_the_elements) git switch -c image_board
Switched to a new branch 'image_board'
➜  grid git:(image_board) npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-grid/image-board


🔗 spicedacademy/fs-web-exercises (main)
📂 sessions/css-grid/image-board

📥 downloading files...
🔑 using GitHub API with token
████████████████████████████████████████ ┈ 100% ┈ 1.41 MB of 1.41 MB transferred

📂 created css-grid_image-board

✅ done
👉 use cd css-grid_image-board to enter the directory

➜  grid git:(image_board) ✗ git add .
➜  grid git:(image_board) ✗ git commit -m "first commit"
[image_board 8fe4492] first commit
 8 files changed, 161 insertions(+)
 create mode 100644 css/grid/css-grid_image-board/.gitignore
 create mode 100644 css/grid/css-grid_image-board/.prettierrc.json
 create mode 100644 css/grid/css-grid_image-board/README.md
 create mode 100644 css/grid/css-grid_image-board/assets/grid-challenge_image-board.png
 create mode 100644 css/grid/css-grid_image-board/css/styles.css
 create mode 100644 css/grid/css-grid_image-board/index.html
 create mode 100644 css/grid/css-grid_image-board/package.json
 create mode 100644 css/grid/css-grid_image-board/sandbox.config.json
➜  grid git:(image_board) git push
fatal: The current branch image_board has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin image_board

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

➜  grid git:(image_board)     git push --set-upstream origin image_board
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 18, done.
Counting objects: 100% (18/18), done.
Delta compression using up to 10 threads
Compressing objects: 100% (12/12), done.
Writing objects: 100% (15/15), 1.35 MiB | 2.26 MiB/s, done.
Total 15 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
remote:
remote: Create a pull request for 'image_board' on GitHub by visiting:
remote:      https://github.com/jenagansivakumar/session-notebook/pull/new/image_board
remote:
To github.com:jenagansivakumar/session-notebook.git
 * [new branch]      image_board -> image_board
branch 'image_board' set up to track 'origin/image_board'.
➜  grid git:(image_board) ls
css-grid_image-board    css-grid_image-gallery  css-grid_place-elements grid.text
➜  grid git:(image_board) cd css-grid_image-board
➜  css-grid_image-board git:(image_board) code .
➜  css-grid_image-board git:(image_board) git add .
➜  css-grid_image-board git:(image_board) ✗ git commit -m "image board"
[image_board f3b606e] image board
 1 file changed, 10 insertions(+), 7 deletions(-)
➜  css-grid_image-board git:(image_board) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 13, done.
Counting objects: 100% (13/13), done.
Delta compression using up to 10 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (7/7), 628 bytes | 628.00 KiB/s, done.
Total 7 (delta 5), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (5/5), completed with 5 local objects.
To github.com:jenagansivakumar/session-notebook.git
   8fe4492..f3b606e  image_board -> image_board
➜  css-grid_image-board git:(image_board) ..
➜  grid git:(image_board) ..
➜  css git:(image_board) ..
➜  session-notebook git:(image_board) ..
➜  spiced-bootcamp cd challenge-spiced
➜  challenge-spiced git:(my_website) ✗ ls
css-positioning_layout-with-position css_structure                        html-and-the-web_div-salad           html-and-the-web_personal-website
➜  challenge-spiced git:(my_website) ✗ git status
On branch my_website
Your branch is up to date with 'origin/my_website'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   html-and-the-web_personal-website/my_website.html

no changes added to commit (use "git add" and/or "git commit -a")
➜  challenge-spiced git:(my_website) ✗ git add .
➜  challenge-spiced git:(my_website) ✗ git commit -m "added border"
[my_website 6ba5b13] added border
 1 file changed, 1 insertion(+), 1 deletion(-)
➜  challenge-spiced git:(my_website) git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
➜  challenge-spiced git:(main) git switch -c "payments_challenge"
Switched to a new branch 'payments_challenge'
➜  challenge-spiced git:(payments_challenge) ls
css_structure              html-and-the-web_div-salad
➜  challenge-spiced git:(payments_challenge) ,,
zsh: command not found: ,,
➜  challenge-spiced git:(payments_challenge) ..
➜  spiced-bootcamp ls
challenge-spiced projects-spiced  savory-web-dev   session-notebook
➜  spiced-bootcamp cd challenge-spiced
➜  challenge-spiced git:(payments_challenge) ls
css_structure              html-and-the-web_div-salad
➜  challenge-spiced git:(payments_challenge) mkdir payments_challenge
➜  challenge-spiced git:(payments_challenge) ls
css_structure              html-and-the-web_div-salad payments_challenge
➜  challenge-spiced git:(payments_challenge) cd payments_challenge
➜  payments_challenge git:(payments_challenge) npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-grid/payment-cards


🔗 spicedacademy/fs-web-exercises (main)
📂 sessions/css-grid/payment-cards

📥 downloading files...
🔑 using GitHub API with token
████████████████████████████████████████ ┈ 100% ┈ 63.7 kB of 63.7 kB transferred

📂 created css-grid_payment-cards

✅ done
👉 use cd css-grid_payment-cards to enter the directory

➜  payments_challenge git:(payments_challenge) ✗ git add .
➜  payments_challenge git:(payments_challenge) ✗ ls
css-grid_payment-cards
➜  payments_challenge git:(payments_challenge) ✗ git commit -m "init commit"
[payments_challenge a3ea783] init commit
 8 files changed, 137 insertions(+)
 create mode 100644 payments_challenge/css-grid_payment-cards/.gitignore
 create mode 100644 payments_challenge/css-grid_payment-cards/.prettierrc.json
 create mode 100644 payments_challenge/css-grid_payment-cards/README.md
 create mode 100644 payments_challenge/css-grid_payment-cards/assets/grid-challenge_payment-cards.png
 create mode 100644 payments_challenge/css-grid_payment-cards/css/styles.css
 create mode 100644 payments_challenge/css-grid_payment-cards/index.html
 create mode 100644 payments_challenge/css-grid_payment-cards/package.json
 create mode 100644 payments_challenge/css-grid_payment-cards/sandbox.config.json
➜  payments_challenge git:(payments_challenge) git push
fatal: The current branch payments_challenge has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin payments_challenge

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.

➜  payments_challenge git:(payments_challenge) git push --set-upstream origin payments_challenge
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 15, done.
Counting objects: 100% (15/15), done.
Delta compression using up to 10 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (14/14), 60.84 KiB | 15.21 MiB/s, done.
Total 14 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'payments_challenge' on GitHub by visiting:
remote:      https://github.com/jenagansivakumar/challenge-spiced/pull/new/payments_challenge
remote:
To github.com:jenagansivakumar/challenge-spiced.git
 * [new branch]      payments_challenge -> payments_challenge
branch 'payments_challenge' set up to track 'origin/payments_challenge'.
➜  payments_challenge git:(payments_challenge) ls
css-grid_payment-cards
➜  payments_challenge git:(payments_challenge) code .
➜  payments_challenge git:(payments_challenge) git add .
➜  payments_challenge git:(payments_challenge) ✗ git commit -m "finished payment challenge"
[payments_challenge 003f69a] finished payment challenge
 1 file changed, 3 insertions(+)
➜  payments_challenge git:(payments_challenge) git push
Enter passphrase for key '/Users/jenagansivakumar/.ssh/id_ed25519':
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 10 threads
Compressing objects: 100% (4/4), done.
Writing objects: 100% (6/6), 524 bytes | 524.00 KiB/s, done.
Total 6 (delta 3), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (3/3), completed with 3 local objects.
To github.com:jenagansivakumar/challenge-spiced.git
   a3ea783..003f69a  payments_challenge -> payments_challenge
➜  payments_challenge git:(payments_challenge) ..
➜  challenge-spiced git:(payments_challenge) git branch
➜  challenge-spiced git:(payments_challenge)
➜  challenge-spiced git:(payments_challenge) ls
css_structure              html-and-the-web_div-salad payments_challenge
➜  challenge-spiced git:(payments_challenge) git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
➜  challenge-spiced git:(main) mkdir Service_gallery_challenge
➜  challenge-spiced git:(main) ls
Service_gallery_challenge  css_structure              html-and-the-web_div-salad
➜  challenge-spiced git:(main) git switch -c service_gallery_challenge
Switched to a new branch 'service_gallery_challenge'
➜  challenge-spiced git:(service_gallery_challenge) cd Service_gallery_challenge
➜  Service_gallery_challenge git:(service_gallery_challenge) ls
➜  Service_gallery_challenge git:(service_gallery_challenge) npx ghcd@latest spicedacademy/fs-web-exercises/tree/main/sessions/css-grid/service-gallery


🔗 spicedacademy/fs-web-exercises (main)
📂 sessions/css-grid/service-gallery

📥 downloading files...
🔑 using GitHub API with token
████████████████████████████████████████ ┈ 100% ┈ 144 kB of 144 kB transferred

📂 created css-grid_service-gallery

✅ done
👉 use cd css-grid_service-gallery to enter the directory

➜  Service_gallery_challenge git:(service_gallery_challenge) ✗ cd css-grid_service-gallery
➜  css-grid_service-gallery git:(service_gallery_challenge) ✗ code .
➜  css-grid_service-gallery git:(service_gallery_challenge) ✗ git add .
➜  css-grid_service-gallery git:(service_gallery_challenge) ✗ git commit -m "first commit"
[service_gallery_challenge 7c64e1c] first commit
 8 files changed, 151 insertions(+)
 create mode 100644 Service_gallery_challenge/css-grid_service-gallery/.gitignore
 create mode 100644 Service_gallery_challenge/css-grid_service-gallery/.prettierrc.json
 create mode 100644 Service_gallery_challenge/css-grid_service-gallery/README.md
 create mode 100644 Service_gallery_challenge/css-grid_service-gallery/assets/grid-challenge_service-gallery.png
 create mode 100644 Service_gallery_challenge/css-grid_service-gallery/css/styles.css
 create mode 100644 Service_gallery_challenge/css-grid_service-gallery/index.html
 create mode 100644 Service_gallery_challenge/css-grid_service-gallery/package.json
 create mode 100644 Service_gallery_challenge/css-grid_service-gallery/sandbox.config.json
➜  css-grid_service-gallery git:(service_gallery_challenge) ..
➜  Service_gallery_challenge git:(service_gallery_challenge) ..
➜  challenge-spiced git:(service_gallery_challenge) ..
➜  spiced-bootcamp ls
challenge-spiced projects-spiced  savory-web-dev   session-notebook
➜  spiced-bootcamp cd challenge-spiced
➜  challenge-spiced git:(service_gallery_challenge) ls
Service_gallery_challenge  css_structure              html-and-the-web_div-salad
➜  challenge-spiced git:(service_gallery_challenge) git branch
➜  challenge-spiced git:(service_gallery_challenge) git switch my_website
Switched to branch 'my_website'
Your branch is ahead of 'origin/my_website' by 1 commit.
  (use "git push" to publish your local commits)
➜  challenge-spiced git:(my_website) ls
css-positioning_layout-with-position css_structure                        html-and-the-web_div-salad           html-and-the-web_personal-website
➜  challenge-spiced git:(my_website) cd html-and-the-web_personal-website
➜  html-and-the-web_personal-website git:(my_website) ls
README.md           assets              buttons.html        css                 my_website.html     package.json        sandbox.config.json
➜  html-and-the-web_personal-website git:(my_website) code .
➜  html-and-the-web_personal-website git:(my_website) code .
➜  html-and-the-web_personal-website git:(my_website) ..
➜  challenge-spiced git:(my_website) ..
➜  spiced-bootcamp cd challenge-spiced
➜  challenge-spiced git:(my_website) ls
css-positioning_layout-with-position css_structure                        html-and-the-web_div-salad           html-and-the-web_personal-website
➜  challenge-spiced git:(my_website) git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
➜  challenge-spiced git:(main) ls
css_structure              html-and-the-web_div-salad
➜  challenge-spiced git:(main) ..
➜  spiced-bootcamp ls
challenge-spiced projects-spiced  savory-web-dev   session-notebook
➜  spiced-bootcamp cd projects-spiced
➜  projects-spiced git:(profile.html) ls
assets              images              index.js            project_1           styles home.css     styles.css
bookmarks.html      index.html          profile.html        styles bookmark.css styles profile.css
➜  projects-spiced git:(profile.html) code .
➜  projects-spiced git:(profile.html) ..
➜  spiced-bootcamp ..
➜  Desktop cd spiced-bootcamp
➜  spiced-bootcamp mkdir personal_learning
➜  spiced-bootcamp cd personal_learning/
➜  personal_learning mkdir javascript
➜  personal_learning cd javascript
➜  javascript ls
➜  javascript mkdir people_counter_app
➜  javascript touch index.html
➜  javascript ls
index.html         people_counter_app
➜  javascript rm index.html
➜  javascript cd people_counter_app
➜  people_counter_app touch index.html
➜  people_counter_app code .
➜  people_counter_app ls
index.html
➜  people_counter_app touch styling.css
➜  people_counter_app ls
index.html  styling.css
➜  people_counter_app touch index.js
➜  people_counter_app ..
➜  javascript ..
➜  personal_learning ..
➜  spiced-bootcamp ..
➜  Desktop ls
Ableton Projects New                  Screenshot 2023-03-09 at 14.41.07.png Screenshot 2023-03-14 at 14.45.09.png
Jena Music                            Screenshot 2023-03-14 at 11.34.58.png session_notebook_2
Musiche                               Screenshot 2023-03-14 at 11.54.07.png spiced-bootcamp
➜  Desktop cd spiced-bootcamp
➜  spiced-bootcamp ls
challenge-spiced  personal_learning projects-spiced   savory-web-dev    session-notebook
➜  spiced-bootcamp cd challenge-spiced
➜  challenge-spiced git:(main) git branch
➜  challenge-spiced git:(main) git switch my_website
Switched to branch 'my_website'
Your branch is ahead of 'origin/my_website' by 1 commit.
  (use "git push" to publish your local commits)
➜  challenge-spiced git:(my_website) ls
css-positioning_layout-with-position css_structure                        html-and-the-web_div-salad           html-and-the-web_personal-website
➜  challenge-spiced git:(my_website) cd html-and-the-web_personal-website
➜  html-and-the-web_personal-website git:(my_website) ls
README.md           assets              buttons.html        css                 my_website.html     package.json        sandbox.config.json
➜  html-and-the-web_personal-website git:(my_website) code .
➜  html-and-the-web_personal-website git:(my_website) ..
➜  challenge-spiced git:(my_website) ls
css-positioning_layout-with-position css_structure                        html-and-the-web_div-salad           html-and-the-web_personal-website
➜  challenge-spiced git:(my_website) ..
➜  spiced-bootcamp ls
challenge-spiced  personal_learning projects-spiced   savory-web-dev    session-notebook
➜  spiced-bootcamp cd projects-spiced
➜  projects-spiced git:(profile.html) ls
assets              images              index.js            project_1           styles home.css     styles.css
bookmarks.html      index.html          profile.html        styles bookmark.css styles profile.css
➜  projects-spiced git:(profile.html) code .
➜  projects-spiced git:(profile.html) ..
➜  spiced-bootcamp ls
challenge-spiced  personal_learning projects-spiced   savory-web-dev    session-notebook
➜  spiced-bootcamp cd session-notebook
➜  session-notebook git:(image_board) git switch main
Switched to branch 'main'
Your branch is up to date with 'origin/main'.
➜  session-notebook git:(main) ls
README.md     css           css.example   directory     directory.md  gitcheats     html          index.md      javascript    shell-and-git
➜  session-notebook git:(main) cd javascript
➜  javascript git:(main) ls
javascript.md
➜  javascript git:(main) ls
javascript.md
➜  javascript git:(main) ..
➜  session-notebook git:(main) cd javascript
➜  javascript git:(main) ls
javascript.md
➜  javascript git:(main) mkdir javascript_basics
➜  javascript git:(main) cd javascript_basics
➜  javascript_basics git:(main) touch basics