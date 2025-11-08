## How I passed Context to LLM:

1. Getting folder structure tree:

    Example: ```tree -L 2 --dirsfirst -I "__pycache__|.git|.venv|node_modules"```

2. How to cat (see all contents of all files in a directory):

```bash
for f in *; do
  [[ -f $f ]] && { echo "=== $f ==="; cat "$f"; echo "---"; }
done
```

Why safer / better:

```[[ -f $f ]]```
→ Tests whether $f is a regular file (not a directory, symlink, device, etc.).
So the commands only run for real files.

```{ ... }```
→ Groups those commands together so they only run if the condition succeeds.

3. You can add conditions to skip certain filenames or patterns:

```bash
for f in *; do
  [[ -f $f ]] || continue     # skip if not a regular file

  # Skip specific files
  [[ $f == "ignoreme.txt" || $f == "secret.key" ]] && continue

  # Or skip by pattern
  [[ $f == *.log || $f == temp_* ]] && continue

  echo "=== $f ==="
  cat "$f"
  echo "---"
done
```



